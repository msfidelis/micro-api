'use strict';

const config    = require('config');
const version   = config.get('version');

const response = {
    version,
    node_version : process.versions.node
}

module.exports = [
	{
		method: "GET",
		path:"/version",
		handler: (req, res) => res.response(response).code(200)
	}
]
