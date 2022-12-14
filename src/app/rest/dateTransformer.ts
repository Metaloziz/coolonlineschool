const dateFormat =
  /[+-]?\d{4}(-[01]\d(-[0-3]\d(T[0-2]\d:[0-5]\d:?([0-5]\d(\.\d+)?)?[+-][0-2]\d:[0-5]\dZ?)?)?)?/;
function isValidDate(date: Date) {
  return (
    date != null && Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date)
  );
}
/**
 * A function which evaluates whether a given key/value pair contains a date or time
 * and converts that value to a Date object if so
 * @param {string} key Key
 * @param {unknown} value Value to evaluate and revive
 * @returns {unknown | Date} the value, simply passed through if not a date, or a Date
 */
function dateReviver(key: string, value: unknown) {
  if (
    (key.includes('date') || key.includes('time')) &&
    typeof value === 'string' &&
    dateFormat.test(value)
  ) {
    const potentialDate = new Date(value);
    if (isValidDate(potentialDate)) {
      return potentialDate;
    }
  }
  return value;
}

export function dateTransformer(data: string) {
  if (data === '') {
    return JSON.parse('{}');
  }

  return JSON.parse(data, dateReviver);
}
