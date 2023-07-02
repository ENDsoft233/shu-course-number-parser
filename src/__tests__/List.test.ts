import { getCollegesList, getLessonPropertiesList, getMajorsList } from '../funcs/list';

test('Colleges List Test', async () => {
  const list = getCollegesList();
  expect(list.length).toBeGreaterThan(0);

  // 08305138 面向对象程序设计A
  expect(list.filter((e) => e.name === '计算机工程与科学学院')[0].regex.test('08305138')).toBeTruthy();

  // 04175006 	数据库应用
  expect(list.filter((e) => e.name === '管理学院')[0].regex.test('04175006')).toBeTruthy();
  expect(list.filter((e) => e.name === '理学院')[0].regex.test('04175006')).toBeFalsy();

  // 00864088 程序设计(C语言)
  expect(list.filter((e) => e.name === '计算机工程与科学学院')[0].regex.test('00864088')).toBeFalsy();
  expect(list.filter((e) => e.name === '')[0].regex.test('00864088')).toBeTruthy();
});

test('Properties List Test', async () => {
  const list = getLessonPropertiesList();
  expect(list.length).toBeGreaterThan(0);

  // 08305138 面向对象程序设计A
  expect(list.filter((e) => e.name === '本科公共基础课')[0].regex.test('08305138')).toBeFalsy();
  expect(list.filter((e) => e.name === '本科学科基础课')[0].regex.test('08305138')).toBeTruthy();

  // 00864088 程序设计(C语言)
  expect(list.filter((e) => e.name === '本科公共基础课')[0].regex.test('00864088')).toBeTruthy();
  expect(list.filter((e) => e.name === '本科学科基础课')[0].regex.test('00864088')).toBeFalsy();
});

test('Colleges Regex With Property Test', async () => {
  const propertyList = getLessonPropertiesList();
  const list = getCollegesList(propertyList.filter((e) => e.name === '本科公共基础课')[0].code);
  expect(list.length).toBeGreaterThan(0);

  // 08305138 面向对象程序设计A
  expect(list.filter((e) => e.name === '计算机工程与科学学院')[0].regex.test('08305138')).toBeFalsy();

  // 00864088 程序设计(C语言)
  expect(list.filter((e) => e.name === '')[0].regex.test('00864088')).toBeTruthy();
});

test('Majors List Test', async () => {
  const csList = getMajorsList('计算机工程与科学学院');
  expect(csList.length).toBeGreaterThan(0);
  // 08305138 面向对象程序设计A
  expect(csList.filter((e) => e.name === '计算机科学与技术')[0].regex.test('08305138')).toBeTruthy();

  const shuList = getMajorsList('');
  expect(shuList.length).toBeGreaterThan(0);
  // 00864088 程序设计(C语言)
  expect(shuList.filter((e) => e.name === '计算中心')[0].regex.test('00864088')).toBeTruthy();

  const manageList = getMajorsList('管理学院');
  expect(manageList.length).toBeGreaterThan(0);
  // 04175086 高级Python程序设计与算法
  expect(manageList.filter((e) => e.name === '信息管理与信息系统')[0].regex.test('04175086')).toBeTruthy();
  expect(manageList.filter((e) => e.name === '信息管理与信息系统')[0].regex.test('24175086')).toBeFalsy();
});

test('Majors Regex With Property Test', async () => {
  const propertyList = getLessonPropertiesList();

  const csList = getMajorsList('计算机工程与科学学院', propertyList.filter((e) => e.name === '本科公共基础课')[0].code);
  expect(csList.length).toBeGreaterThan(0);
  // 08305138 面向对象程序设计A
  expect(csList.filter((e) => e.name === '计算机科学与技术')[0].regex.test('08305138')).toBeFalsy();

  const shuList = getMajorsList('', propertyList.filter((e) => e.name === '本科公共基础课')[0].code);
  expect(shuList.length).toBeGreaterThan(0);
  // 00864088 程序设计(C语言)
  expect(shuList.filter((e) => e.name === '计算中心')[0].regex.test('00864088')).toBeTruthy();
});
