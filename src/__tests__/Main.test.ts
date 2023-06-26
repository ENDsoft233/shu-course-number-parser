import { getCourseInfo } from '../index';

test('getCourseInfo', () => {
  expect(getCourseInfo('')).toBe('');

  expect(getCourseInfo('01034119')).toBe('理学院应用物理学本科公共基础课');
  expect(getCourseInfo('08305138')).toBe('计算机工程与科学学院计算机科学与技术本科学科基础课');
  expect(getCourseInfo('08305140')).toBe('计算机工程与科学学院计算机科学与技术本科学科基础课');
  expect(getCourseInfo('16584168')).toBe('马克思主义学院本科公共基础课');
  expect(getCourseInfo('2800R807')).toBe('社会学院人文社科大类通识课');
  expect(getCourseInfo('03004492')).toBe('外国语学院本科公共基础课');

  expect(getCourseInfo('99999999')).toBe('其他');
  expect(getCourseInfo('FFFFFFFF')).toBe('');
});
