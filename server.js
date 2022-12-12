const http = require('http');
const url = require('url'); // import url qui est un module qui permet d'utiliser des méthodes de serveur http
const fs = require('fs');
//const logger = require('./logger'); //module pour logger
const hostname = 'localhost';
const port = 3020;

//logger.log('debug', 'Allo, Winston!');

const server = http.createServer((req, res) => {
	let requeteHTTP = req.url.slice(1);
	if (req.method == 'POST') {
		extractBody(req, res, selectRoute);
	} else {
		selectRoute(req, res, null);
	}
});

async function selectRoute(req, res, body) {
	let parametres = req.url.slice(1).split('/');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
}

function extractBody(req, res, callback) {
	let body = req.body;
	console.log(body);
}

server.listen(port, hostname, () => {
	console.log(
		'info',
		`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`
	);
});
