import { BiMap } from '.';

export const lessonProperties: BiMap<string> = {
  114514: '', // unknown
  0: '预科(无学分)',
  1: '专科基础课',
  2: '专科专业课',
  3: '专科、本科共同课程',
  4: '本科公共基础课',
  5: '本科学科基础课',
  6: '本科专业课',
  7: '硕士课程',
  8: '博士课程',
  9: '其他',
  A: '实践环节课程',
  C: '创新创业模块',
  D: '读书（或经典导读）与研讨',
  J: '经济管理大类通识课',
  L: '理学工学大类通识课',
  R: '人文社科大类通识课',
  T: '通识专题课',
  X: '公共选修课',
  Y: '新生研讨课',
  JH: '经济管理类核心通识课',
  LH: '理学工学类核心通识课',
  RH: '人文社科类核心通识课',
  EY: '二年级研讨课',
  SY: '三年级研讨课',
};

/**
 * returns the property of the courseId given
 * @param lessonCode 8-digit course id
 * @returns `string` for the courseId's property
 * @example getLessonProperty('0830A030') // returns '实践环节课程'
 */
export function getLessonProperty(lessonCode: string): string {
  if (lessonCode.length !== 8) return '';
  return (
    lessonProperties[lessonCode.substring(4, 6)] ||
    lessonProperties[
      Object.entries(lessonProperties).find(([code]) => lessonCode.substring(4, 6).startsWith(code))?.[0] || '114514'
    ]
  );
}
