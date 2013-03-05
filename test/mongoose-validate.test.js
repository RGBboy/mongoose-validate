/**
 * Module dependencies.
 */

var should = require('should'),
    validate = require('../');

describe('Validate', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      validate.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

  describe('.email', function () {

    it('should return true for valid value', function (done) {
      validate.email('test@test.com').should.be.true;
      done();
    });

    it('should return false for an invalid value', function (done) {
      validate.email('testtest.com').should.be.false;
      validate.email('test@test.').should.be.false;
      validate.email('test@test').should.be.false;
      validate.email('test@.com').should.be.false;
      validate.email('test.com').should.be.false;
      validate.email('test').should.be.false;
      validate.email(1).should.be.false;
      validate.email(['test@test.com']).should.be.false;
      done();
    });

  });

  describe('alpha', function () {

    it('should return true for valid value', function (done) {
      validate.alpha('a').should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      validate.alpha(' a ').should.be.false;
      validate.alpha('1').should.be.false;
      validate.alpha('.').should.be.false;
      done();
    });

  });

  describe('alphanumeric', function () {

    it('should return true for valid value', function (done) {
      validate.alphanumeric('a').should.be.true;
      validate.alphanumeric('1').should.be.true;
      validate.alphanumeric(1).should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      validate.alphanumeric(' ').should.be.false;
      validate.alphanumeric('.').should.be.false;
      done();
    });

  });

  describe('.numeric', function () {

    it('should return true for valid value', function (done) {
      validate.numeric('1').should.be.true;
      validate.numeric(1).should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      validate.numeric('a').should.be.false;
      validate.numeric(' ').should.be.false;
      validate.numeric('.').should.be.false;
      done();
    });

  });

  describe('.int', function () {

    it('should return true for valid value', function (done) {
      validate.int('1').should.be.true;
      validate.int(1).should.be.true;
      validate.int('0').should.be.true;
      validate.int(0).should.be.true;
      validate.int('-1').should.be.true;
      validate.int(-1).should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      validate.int('a').should.be.false;
      validate.int(' ').should.be.false;
      validate.int('.').should.be.false;
      validate.int('1.5').should.be.false;
      validate.int(1.5).should.be.false;
      validate.int('0.5').should.be.false;
      validate.int(0.5).should.be.false;
      validate.int('-1.5').should.be.false;
      validate.int(-1.5).should.be.false;
      done();
    });

  });

  describe('.postalCode', function () {

    it('should return true for valid value', function (done) {
      // longest (10 characters)
      validate.postalCode('a1a1a1a1a1').should.be.true;
      // shortest (3 characters)
      validate.postalCode('a1a').should.be.true;
      // all alpha
      validate.postalCode('aaaaaa').should.be.true;
      // all numeric
      validate.postalCode('111111').should.be.true;
      // contains single space
      validate.postalCode('a1a 1a1').should.be.true;
      // contains single hyphen
      validate.postalCode('a1a-1a1').should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      // too long
      validate.postalCode('a1a1a1a1a1a').should.be.false;
      // too short
      validate.postalCode('a1').should.be.false;
      // too many spaces and hyphens
      validate.postalCode('a1a  1a1').should.be.false;
      validate.postalCode('a1a--1a1').should.be.false;
      validate.postalCode('a1a -1a1').should.be.false;
      // invalid character
      validate.postalCode('a1a.1a1').should.be.false;
      done();
    });

  });

  describe('.permalink', function () {

    it('should return true for valid value', function (done) {
      validate.permalink('a').should.be.true;
      validate.permalink('1').should.be.true;
      validate.permalink(1).should.be.true;
      validate.permalink('-').should.be.true;
      validate.permalink('a1-a1').should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      validate.permalink('').should.be.false;
      validate.permalink(' ').should.be.false;
      validate.permalink('A').should.be.false;
      validate.permalink('/').should.be.false;
      done();
    });

  });

});