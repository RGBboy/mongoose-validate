# Mongoose Validate

  Additional Validation functions for your mongoose schema.

  [![Build Status](https://secure.travis-ci.org/RGBboy/mongoose-validate.png)](http://travis-ci.org/RGBboy/mongoose-validate)

## Installation

  Works with Mongoose 3.3.x

    $ npm install git://github.com/RGBboy/mongoose-validate.git

## Usage

Mongoose Validate has been written to be used directly when declaring a Mongoose Schema:

``` javascript
var validate = require('mongoose-validate')
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , NewSchema;

NewSchema = new Schema({
  email: { type: String, required: true, validate: [validate.email, 'invalid email address'] }
});

```

### Email

Validates an email.

## To Do

  * Write tests;
  * Add other validation;
