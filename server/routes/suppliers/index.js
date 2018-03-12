const suppliers = require('express').Router();
const all = require('./all');
const id = require('./id');

suppliers.get('/', all);
suppliers.get('/:id', id);

module.exports = suppliers;
