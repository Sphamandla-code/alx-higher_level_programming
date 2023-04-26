#!/usr/bin/node
// prints title of a Star Wars movie where episode number matches a given integer.

const req = require('request');
const episode = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/:id' + episode;

req(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
