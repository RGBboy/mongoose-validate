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

    it('should return true for valid email', function (done) {
      validate.email('test@test.com').should.be.true;
      done();
    });

    it('should return false for an invalid email', function (done) {
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

});