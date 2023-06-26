import { lessonProperties, getLessonProperty } from './../types/property';

test('Lesson Property Test - Read Directly', () => {
  expect(lessonProperties.A).toBe('实践环节课程');
  expect(lessonProperties['4']).toBe('本科公共基础课');
  expect(lessonProperties.ABC).toBeUndefined();
});

test('Lesson Property Test - Read by Function', () => {
  expect(getLessonProperty('31')).toBe('专科、本科共同课程');
  expect(getLessonProperty('40')).toBe('本科公共基础课');
  expect(getLessonProperty('A0')).toBe('实践环节课程');
  expect(getLessonProperty('FF')).toBe('');
});
