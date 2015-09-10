'use strict';
import mutliTypeof from 'multi-typeof';

/**
 * Determine if string should be appended with appendString
 * @param {String} string - string to append, conditionally
 * @param {String} appendString - string to append to string if string doesn't start with appendString
 * @return {Boolean} - should string be appended with appendString?
 */
function defaultCondition(string, appendString) {
  const regex = new RegExp(appendString + '$');

  return !regex.test(string);
}

/**
 * append a string if a condition is met
 * @throws {TypeError} - if string or appendString is not a string
 * @param {String} string - string to append text to if condition is true
 * @param {String} appendString - string that should be appended to string
 * @param {Function} [condition=defaultCondition] - if true, append string to string
 * @return {String} - string with appendString if condition is true, otherwise just string
 */
export default function appendIf(string, appendString, condition = defaultCondition) {
  if (typeof string !== 'string' || typeof appendString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (condition && !mutliTypeof(condition, ['boolean', 'function'])) {
    throw new TypeError('Expected a boolean or function');
  }

  if (typeof condition === 'boolean') {
    return condition ? string + appendString : string;
  }

  return condition(string, appendString) ? string + appendString : string;
}
