'use strict';

const statusCodes = require('./statusCodes');
const error = require('./httpStatusCodeErrors');

const result = Object.assign({statusCodes}, error);
module.exports = result;
