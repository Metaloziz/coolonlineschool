export const removeEmptyFields = (obj: any) => {
  const result: any = {};
  const keysArray = Object.keys(obj);

  keysArray.forEach(key => {
    if (obj[key]) {
      result[key] = obj[key];
    }

    if (typeof obj[key] === 'boolean') {
      result[key] = obj[key];
    }
  });
  return result;
};
