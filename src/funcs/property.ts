import { lessonProperties } from '../types/property';

/**
 * returns the property of the courseId given
 * @param lessonCode 8-digit course id
 * @returns `string` for the courseId's property
 * @example getLessonProperty('0830A030') // returns '实践环节课程'
 */
export function getLessonProperty(lessonCode: string): string {
  if (lessonCode.length !== 8) return '';
  return lessonProperties[lessonCode.substring(4, 5)] || lessonProperties[lessonCode.substring(4, 6)] || '';
}
