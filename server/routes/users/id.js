const db = require('../../models/index');

module.exports = (req, res) => {
  db.sequelize.models.users.findAll({
    where: {
      userId: req.params.id,
    },
  })
    .then(user => res.status(200).json({ user }));
};
