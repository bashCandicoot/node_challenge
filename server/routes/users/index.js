const users = require('express').Router();
const all = require('./all');
const id = require('./id');
const name = require('./name');

users.get('/', all);
users.get('/id/:id', id);
users.get('/name/:name', name);

module.exports = users;
