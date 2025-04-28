const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here
"use strict";


afterAll(()=>{
  server.close();
});

describe('Server', () => {

  // Test the character creation
  test('responds to /create-character POST request with query parameter', done =>{
    const options ={
      hostname: 'localhost',
      port: 3000,
      path: '/create-character?charClass=Warrior&gender=Female&funFact=Powerful',
      method: 'POST',
    };
    const req = http.request(options, res =>{
      let data ='';
      res.on('data', chunk=>{
        data += chunk;
      });
      res.on('end',() =>{
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Your Warrior character has been created successfully!');
        done();
      });
    });
    req.end();
  });

  // Verify that the character has been created
  test('responds to /confirm-character POST request', done =>{
    const options ={
      hostname: 'localhost',
      port: 3000,
      path: '/confirm-character',
      method: 'POST',
    };
    const req = http.request(options, res =>{
      let data ='';
      res.on('data', chunk=>{
        data += chunk;
      });
      res.on('end',() =>{
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character has been confirmed!');
        done();
      });
    });
    req.end();
  });


  // Now test if the GET request returns the newly created character
  test('responds to /view-character GET request in JSON format', done =>{

    http.get("http://localhost:3000/view-character", res =>{
      let data = '';
      res.on("data", chunk =>{
        data += chunk;
      });
      res.on("end", ()=>{
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(data)).toEqual({
          charClass: "Warrior",
          gender: "Female",
          funFact: "Powerful",
        });
        done();
      });
    });

  });
});