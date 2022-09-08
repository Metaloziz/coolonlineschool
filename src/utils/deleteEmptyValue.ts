const ALLOWED_VALUES = [false, 0];

export const DeleteEmptyValue = (object: Record<string, any> | undefined) => {
  if (!object) {
    return undefined;
  }
  const keys = Object.keys(object);
  const result: Record<string, any> = {};

  for (let i = 0; i < keys.length; i++) {
    const value = object[keys[i]];

    if (value || ALLOWED_VALUES.includes(value)) {
      result[keys[i]] = object[keys[i]];
    }
  }
  return result;
};
