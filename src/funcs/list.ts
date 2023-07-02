import { QueryList, QueryListWithCode } from '../types/list';
import { colleges } from '../types/colleges';
import { lessonProperties } from '../types/property';
import { BiMap } from '../types/bimap';

/**
 * 获取课程属性列表
 * @returns interface `{ name: string, code: string, regex: RegExp }[]`
 */
export function getLessonPropertiesList(): QueryListWithCode[] {
  const list: QueryListWithCode[] = [];
  Object.entries(lessonProperties).forEach(([code, name]) => {
    list.push({
      name,
      code,
      regex: new RegExp(`^([a-zA-Z0-9]{4})${code}([0-9]{${4 - code.length}})$`),
    });
  });
  return list;
}

/**
 * 获取学院列表
 * @param property `property.code` 生成正则表达式用, 课程属性, 默认匹配全部
 * @returns interface `{ name: string, regex: RegExp }[]`
 */
export function getCollegesList(property = '[a-zA-Z0-9]{2}'): QueryList[] {
  const list: QueryList[] = [];
  interface BucketOfColleges {
    [key: string]: { codes: string[]; majors: string[] };
  }
  const collegesBucket: BucketOfColleges = {};
  Object.entries(colleges).forEach(([collegeCode, college]) => {
    if (college instanceof Array) {
      for (const col of college) {
        const majorCodes: string[] = [];
        Object.entries(col).map(([majorCode]) => {
          if (majorCode !== 'self') majorCodes.push(majorCode);
        });
        if (typeof collegesBucket[col.self] === 'undefined') {
          collegesBucket[col.self] = {
            codes: [collegeCode],
            majors: ['00', ...majorCodes],
          };
        } else {
          collegesBucket[col.self].codes.push(collegeCode);
          collegesBucket[col.self].majors.push(...majorCodes);
        }
      }
    } else {
      const majorCodes: string[] = [];
      Object.entries(college).forEach(([majorCode]) => {
        if (majorCode !== 'self') majorCodes.push(majorCode);
      });
      if (typeof collegesBucket[college.self] === 'undefined') {
        collegesBucket[college.self] = {
          codes: [collegeCode],
          majors: ['00', ...majorCodes],
        };
      } else {
        collegesBucket[college.self].codes.push(collegeCode);
        collegesBucket[college.self].majors.push(...majorCodes);
      }
    }
  });
  Object.entries(collegesBucket).forEach(([collegeName, college]) => {
    list.push({
      name: collegeName,
      regex: new RegExp(
        `^${college.codes.length === 1 ? college.codes[0] : `(${college.codes.join('|')})`}${
          college.majors.length === 1 ? '([a-zA-Z0-9]{2})' : `(${college.majors.join('|')})`
        }${property.length === 1 ? `(${property})([0-9]{1})` : `(${property})`}([0-9]{2})$`,
      ),
    });
  });
  return list;
}

/**
 * 获取专业列表
 * @param college `college.name` 学院
 * @param property `property.code` 生成正则表达式用, 课程属性, 默认匹配全部
 * @returns interface `{ name: string, regex: RegExp }[]`
 */
export function getMajorsList(college: string, property = '[a-zA-Z0-9]{2}'): QueryList[] {
  const list: BiMap<{ major: string }> = {};
  const collegeCodes: string[] = [];
  Object.entries(colleges).forEach(([collegeCode, collegeObj]) => {
    if (collegeObj instanceof Array) {
      for (const col of collegeObj) {
        if (col.self === college) {
          collegeCodes.push(collegeCode);
          Object.entries(col).forEach(([majorCode, majorName]) => {
            if (majorCode !== 'self' && !list[majorCode]) {
              list[majorCode] = {
                major: majorName,
              };
            }
          });
        }
      }
    } else if (collegeObj.self === college) {
      collegeCodes.push(collegeCode);
      Object.entries(collegeObj).forEach(([majorCode, majorName]) => {
        if (majorCode !== 'self' && !list[majorCode]) {
          list[majorCode] = {
            major: majorName,
          };
        }
      });
    }
  });
  return Object.entries(list).map(([majorCode, major]) => ({
    name: major.major,
    regex: new RegExp(
      `^(${collegeCodes.join('|')})(${majorCode})${
        property.length === 1 ? `(${property})([0-9]{1})` : `(${property})`
      }([0-9]{2})$`,
    ),
  }));
}
