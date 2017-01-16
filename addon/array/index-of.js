import { normalizeArray } from './-utils';

export default normalizeArray({ defaultValue: -1 }, (array, ...args) => {
  return array.indexOf(...args);
});
