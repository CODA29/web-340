const http = require('http');
const url = require('url');

// TODO: Implement your server here
"use strict";

let character = null;

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;


  if(pathname === '/create-character' && req.method === "POST"){

    character = {
      charClass: query.charClass,
      gender: query.gender,
      funFact: query.funFact,
    };

    res.writeHead(201);
    res.end(`Your ${character.charClass} character has been created successfully!`);

  }else if(pathname === '/confirm-character' && req.method === "POST"){

    res.writeHead(200);
    res.end('Character has been confirmed!');

  }else if(pathname === '/view-character' && req.method === "GET"){

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(character || {}));

  }else{

    res.writeHead(404);
    res.end();

  }

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;