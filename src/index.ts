import { getLessonProperty } from './types/property';
import { getLessonCollegeOrMajor } from './types/colleges';

export { getLessonCollegeOrMajor, getLessonProperty };

export function getCourseInfo(courseId: string): string {
  return `${getLessonCollegeOrMajor(courseId, 'college')}${getLessonCollegeOrMajor(
    courseId,
    'major',
  )}${getLessonProperty(courseId)}`;
}
