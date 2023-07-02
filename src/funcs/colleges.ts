import { colleges } from '../types/colleges';

/**
 * returns the college or major of the courseId given
 * @param lessonCode 8-digit course id
 * @param type `college` returns campus name what the first and second represented or `major` returns major name what the third and fourth represented
 * @returns `string` for the designated name
 * @example getLessonCollegeOrMajor('0830A030', 'college') // returns '计算机工程与科学学院'
 */
export function getLessonCollegeOrMajor(lessonCode: string, type: 'college' | 'major'): string {
  if (lessonCode.length !== 8) return '';
  const search = Object.entries(colleges).map(([collegeCode, college]) => {
    if (lessonCode.startsWith(collegeCode) || collegeCode === '00') {
      if (college instanceof Array) {
        for (const col of college)
          if (Object.entries(col).some(([majorCode]) => lessonCode.substring(2, 4) === majorCode))
            return type === 'college' ? col.self : col[lessonCode.substring(2, 4)] || '';
      } else return type === 'college' ? college.self : college[lessonCode.substring(2, 4)] || '';
    }
    return '';
  });
  for (const result of search) {
    if (result !== '') {
      return result;
    }
  }
  return '';
}
