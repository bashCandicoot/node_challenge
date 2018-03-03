const Sequelize = require('sequelize');

const User = Sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  dateOfBirth: {
    type: Sequelize.DATE,
  },
  type: {
    // type: ['SUPPLIER', 'TENANT'],
  },
  phone: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = User;
