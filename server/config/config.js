let defaults = require('./defaults')

const env = process.env.NODE_ENV || 'dev';
const overrides = require('./' + env);

module.exports = Object.assign(defaults, overrides);

