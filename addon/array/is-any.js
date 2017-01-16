import { normalizeArray } from './-utils';

export default normalizeArray({}, (array, ...args) => {
  return array.isAny(...args);
});
