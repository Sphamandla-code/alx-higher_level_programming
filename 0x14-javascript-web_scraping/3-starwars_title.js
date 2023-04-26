#!/usr/bin/node
// script that display the status code of a GET request.
const request = require('request');
const id = process.argv[2];
const url = 'http://swapi.co/api/films/' + id;

function printTitle (url) {
  request(url, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      let jsonDict = JSON.parse(body);
      console.log(jsonDict.title);
    }
  });
}
printTitle(url);
