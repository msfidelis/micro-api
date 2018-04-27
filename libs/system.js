'use strict';

const os = require('os');

module.exports.infos = () => {
    return {
        hostname : os.hostname(),
        os: {
            type: os.type(),
            platform: os.platform(),
            release: os.release(),
            arch: os.arch()
        },
        resources: {
            memory: {
                limit: os.totalmem(),
                free: os.freemem()
            },
            cpus: os.cpus(),
        }
    }
};