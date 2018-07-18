'use strict';

module.exports = [
    // Hapi Router
    {
        plugin: require('hapi-router'),
        options: {
            routes: 'modules/*/routes/*.js'
        }
    }
]