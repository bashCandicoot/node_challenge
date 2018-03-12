const reposits = require('express').Router();
const all = require('./all');
const id = require('./id');

reposits.get('/', all);
reposits.get('/:id', id);

module.exports = reposits;
