import { getLessonProperty } from './funcs/property';
import { getLessonCollegeOrMajor } from './funcs/colleges';

export { getLessonCollegeOrMajor, getLessonProperty };

/**
 * returns the college name, major name and the property of the courseId given
 * @param courseId 8-digit course id
 * @returns `string` includes the college name, major name and the property
 * @example getCourseInfo('0830A030') // returns '计算机工程与科学学院计算机科学与技术实践环节课程'
 */
export function getCourseInfo(courseId: string): string {
  return `${getLessonCollegeOrMajor(courseId, 'college')}${getLessonCollegeOrMajor(
    courseId,
    'major',
  )}${getLessonProperty(courseId)}`;
}
