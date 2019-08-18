'use strict';

const fibonacci = require('../../../libs/fibonacci');

module.exports = [
    {
        method: "GET",
        path: "/fibonacci/{n}",
        handler: async (req, res) => {
            return new Promise((resolve, reject) => {

                try {
                    const n = parseInt(req.params.n);
                    const result = fibonacci(n);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }

            })
            .then(result => res.response(result).code(200))
            .catch(error => res.response({ error }).code(500))

        }
    }
]
