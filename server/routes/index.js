const routes = require('express').Router();
const users = require('./users');
const suppliers = require('./suppliers');
const reposits = require('./reposits');

routes.use('/users', users);
routes.use('/suppliers', suppliers);
routes.use('/reposits', reposits);

module.exports = routes;
