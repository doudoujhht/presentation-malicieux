const http = require('http');
const url = require('url'); // import url qui est un module qui permet d'utiliser des méthodes de serveur http
const fs = require('fs');
//const logger = require('./logger'); //module pour logger
const hostname = 'localhost';
const port = 3020;

//logger.log('debug', 'Allo, Winston!');

const server = http.createServer((req, res) => {
	// logger.log(
	// 	'info',
	// 	`Le serveur a reçu une requête de URL : http://${hostname}:${port} requete:req.url`
	// );
	let requeteHTTP = req.url.slice(1); // enleve le / de depart de la requete
	let parametres = requeteHTTP.split('/'); // Va créer un tableau contenant chaque élément de la requete URL
	//Ce qui va s'afficher pour tester le fonctionnement du serveur
	// logger.log(
	// 	'info',
	// 	`Requête http: ${requeteHTTP} \n - parametres: ${parametres} \n - nbre de parametres: ${parametres.length}`
	// );

	if (req.method == 'POST') {
		extractBody(req, res, selectRoute);
	} else {
		//Fonction qui va extraire la route des parametres de la requete
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
	// stack overflow: https://stackoverflow.com/questions/4720343/loading-basic-html-in-node-js
	
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
