const db = require('../../models/index');

module.exports = (req, res) => {
  db.sequelize.models.users.findAll()
    .then(users => res.status(200).json({ users }));
};
