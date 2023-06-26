import { colleges } from './../types/colleges';

test('College Test', () => {
  expect(colleges['08'].self).toBe('计算机工程与科学学院');
});
