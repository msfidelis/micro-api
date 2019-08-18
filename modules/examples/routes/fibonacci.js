'use strict';

const fibonacci = require('../../../libs/fibonacci');

module.exports = [
    {
        method: "GET",
        path: "/fibonacci/{n}",
        handler: (req, res) => {
            return new Promise(async (resolve, reject) => {
                const n = parseInt(req.params.n);
                const block = fibonacci(n);
                resolve(block);
            })
            .then(number => res.response(number).code(200))
            .catch(err => res.response(err).code(500))
        }
    }
]
