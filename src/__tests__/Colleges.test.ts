import { getLessonCollegeOrMajor } from './../types/colleges';

test('College Test', () => {
  expect(getLessonCollegeOrMajor('0830A030', 'college')).toBe('计算机工程与科学学院');
  expect(getLessonCollegeOrMajor('00853430', 'college')).toBe('');
  expect(getLessonCollegeOrMajor('01034119', 'college')).toBe('理学院');
  expect(getLessonCollegeOrMajor('00000000', 'college')).toBe('');
  expect(getLessonCollegeOrMajor('99999999', 'college')).toBe('');
});

test('Major Test', () => {
  expect(getLessonCollegeOrMajor('0830A030', 'major')).toBe('计算机科学与技术');
  expect(getLessonCollegeOrMajor('00853430', 'major')).toBe('体育学院');
  expect(getLessonCollegeOrMajor('01034119', 'major')).toBe('应用物理学');
  expect(getLessonCollegeOrMajor('00000000', 'major')).toBe('');
  expect(getLessonCollegeOrMajor('99999999', 'major')).toBe('');
});
