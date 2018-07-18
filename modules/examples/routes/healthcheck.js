'use strict';

module.exports = [
	{
		method: "GET",
		path:"/healthcheck",
		handler: (req, res) => res.response({status: 200}).code(200)
	}
]
