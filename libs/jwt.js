
'use strict';

const jwt       = require('jwt-simple');
const config    = require('config');

const SECRET    = config.get('server.JWT_SECRET');

module.exports.encode = payload => jwt.encode(payload, SECRET);
module.exports.decode = token => jwt.decode(token, SECRET);