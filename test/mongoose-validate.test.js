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

  describe('.postalcode', function () {

    it('should return true for valid value', function (done) {
      // longest (10 characters)
      validate.postalcode('a1a1a1a1a1').should.be.true;
      // shortest (3 characters)
      validate.postalcode('a1a').should.be.true;
      // all alpha
      validate.postalcode('aaaaaa').should.be.true;
      // all numeric
      validate.postalcode('111111').should.be.true;
      // contains single space
      validate.postalcode('a1a 1a1').should.be.true;
      // contains single hyphen
      validate.postalcode('a1a-1a1').should.be.true;
      done();
    });

    it('should return false for invalid value', function (done) {
      // too long
      validate.postalcode('a1a1a1a1a1a').should.be.false;
      // too short
      validate.postalcode('a1').should.be.false;
      // too many spaces and hyphens
      validate.postalcode('a1a  1a1').should.be.false;
      validate.postalcode('a1a--1a1').should.be.false;
      validate.postalcode('a1a -1a1').should.be.false;
      // invalid character
      validate.postalcode('a1a.1a1').should.be.false;
      done();
    });

  });

});