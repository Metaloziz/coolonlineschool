export const removeKeysWithSameValues = (one: any, two: any) => {
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const resultKey in one) {
    if (one[resultKey] !== two[resultKey]) {
      // @ts-ignore
      result[resultKey] = one[resultKey];
    }
  }

  return result;
};
