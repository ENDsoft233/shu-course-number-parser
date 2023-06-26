import { lessonProperties, getLessonProperty } from './../types/property';

test('Lesson Property Test - Read Directly', () => {
  expect(lessonProperties.A).toBe('实践环节课程');
  expect(lessonProperties['4']).toBe('本科公共基础课');
  expect(lessonProperties.ABC).toBeUndefined();
});

test('Lesson Property Test - Read by Function', () => {
  expect(getLessonProperty('99999')).toBe('');

  expect(getLessonProperty('00853430')).toBe('专科、本科共同课程');
  expect(getLessonProperty('00874008')).toBe('本科公共基础课');
  expect(getLessonProperty('0830A033')).toBe('实践环节课程');
  expect(getLessonProperty('08305140')).toBe('本科学科基础课');
  expect(getLessonProperty('2800R807')).toBe('人文社科大类通识课');
  expect(getLessonProperty('99999999')).toBe('其他');
  expect(getLessonProperty('FFFFFFFF')).toBe('');
});
