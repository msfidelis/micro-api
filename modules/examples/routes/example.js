'use strict';

const system  = require('../../../libs/system');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (req, res) => {
            return res.response({message: "the cake is a lie"}).code(200)
        }
    },
    {
        method: "GET",
        path: "/hello/{name}",
        handler: (req, res) => `Hello, ${req.params.name}!!`
    },
    {
        method: "GET", 
        path: "/system", 
        handler: (req, res) => {
            const data = system.infos();
            return res.response(data).code(200);
        }
    }
]
