'use strict'

const Hapi = require('hapi');
const Boom = require('boom');

const PORT = process.env.PORT || 3000;

const server = Hapi.server({
    port: PORT,
    host: '0.0.0.0',
    routes: {
        validate: {
            failAction: async (request, h, err) => Boom.badRequest(err.message)
        }
    }
});

const init = async () => {

    await server.register({
        plugin: require('hapi-router'),
        options: {
            routes: 'modules/*/routes/*.js'
        }
    });

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();