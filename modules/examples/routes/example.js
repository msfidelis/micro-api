'use strict';

const system  = require('../../../libs/system');
const fibonacci = require('../../../libs/fibonacci');

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
    },
    {
        method: "GET",
        path: "/fibonacci/{n}",
        handler: async (req, res) => {
            const n = await parseInt(req.params.n);
            const block = await fibonacci(n)
            return res.response(block).code(200);
        }
    }
]
