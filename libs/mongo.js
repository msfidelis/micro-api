'use strict';

const config    = require('config');
const mongo     = require('mongoose');
const bluebird  = require('bluebird');

mongo.Promise   = bluebird;

const mongo_hostname    = config.get('databases.mongo.HOST');
const mongo_port        = config.get('databases.mongo.PORT');
const mongo_database    = config.get('databases.mongo.DATABASE');
const mongo_user        = config.get('databases.mongo.USER');
const mongo_password    = config.get('databases.mongo.PASSWORD');

const mongoaddr = `mongodb://${mongo_user}:${mongo_password}@${mongo_hostname}:${mongo_port}/${mongo_database}`;


mongo.connect(mongoaddr);

module.exports = mongo;