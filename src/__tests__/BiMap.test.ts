import { BiMap, reverseBiMap } from '../types/bimap';
const testBiMap: BiMap<string> = {
  A: 'B',
};

test('BitMap Test', () => {
  expect(testBiMap['A']).toBe('B');
});

test('BitMap reverse Test', () => {
  expect(reverseBiMap(testBiMap)['B']).toBe('A');
});
