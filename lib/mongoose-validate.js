/*!
 * Mongoose Validate
 */

/**
 * Module Dependencies
 */

var validator = require('validator'),
    validate = {};

/**
* Library version.
*/

validate.version = '0.0.6';

/**
 * .email
 *
 * @param {String} value
 *
 * @api public
 */
validate.email = function (value) {
  return 'string' === typeof value && validator.isEmail(value);
};

/**
 * .address
 *
 * @todo: Add address validation
 *        firstName
 *        lastName
 *        organisation
 *        address1..4
 *        suburb
 *        city
 *        country
 */

// Check out validator.checks validation

/**
 * .alpha
 *
 * @param {String} value
 *
 * @api public
 */
validate.alpha = function (value) {
  return validator.isAlpha(value);
};

/**
 * .alphanumeric
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.alphanumeric = function (value) {
  return validator.isAlphanumeric(value);
};

/**
 * .numeric
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.numeric = function (value) {
  return validator.isNumeric(value);
};

/**
 * .int
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.int = function (value) {
  return validator.isInt(value);
};

/**
 * .postalCode
 *
 * Postal Codes should be between 3 and 10 alphanumeric characters according
 * to http://en.wikipedia.org/wiki/Postal_code
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.postalCode = function (value) {
  var reg = /^[a-zA-Z0-9]+[ -]{0,1}[a-zA-Z0-9]+$/;
  return validator.isLength(value, 3, 10) && reg.test(value);
};

/**
 * .permalink
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.permalink = function (value) {
  return /^[a-z0-9\-]+$/.test(value);
};


/**
 * Module Exports
 */

module.exports = exports = validate;

