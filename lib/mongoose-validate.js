/*!
 * Mongoose Validate
 */

/**
 * Module Dependencies
 */

var check = require('validator').check,
    validate = {};

/**
* Library version.
*/

validate.version = '0.0.1';

/**
 * .email
 *
 * @param {String} value
 *
 * @api public
 */
validate.email = function (value) {
  try {
    check(value).isEmail();
  } catch(err) {
    return false;
  }
  return true;
};

/**
 * Module Exports
 */

module.exports = exports = validate;

