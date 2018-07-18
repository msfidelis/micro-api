'use strict'

const Hapi = require('hapi');
const Boom = require('boom');

const serverConfigs = require('./config/server');
const serverPlugins = require('./config/plugins');

const server = Hapi.server(serverConfigs);

const init = async () => {
    await server.register(serverPlugins);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();