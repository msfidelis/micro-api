'use strict';

const config = require('config');

const PORT = config.get('server.PORT') || 3000;

module.exports = {
    port: PORT,
    host: '0.0.0.0',
    routes: {
        validate: {
            failAction: async (request, h, err) => Boom.badRequest(err.message)
        }
    }
}