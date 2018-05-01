'use strict';

const PORT = process.env.PORT || 3000;

module.exports = {
    port: PORT,
    host: '0.0.0.0',
    routes: {
        validate: {
            failAction: async (request, h, err) => Boom.badRequest(err.message)
        }
    }
}