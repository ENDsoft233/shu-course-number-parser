export interface BiMap<T> {
  [key: string]: T;
}

export const reverseBiMap = (biMap: BiMap<string>): BiMap<string> => {
  const nameToCode: BiMap<string> = {};
  for (const [code, name] of Object.entries(biMap)) nameToCode[name] = code;
  return nameToCode;
};
