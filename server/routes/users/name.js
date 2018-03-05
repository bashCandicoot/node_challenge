const db = require('../../models/index');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

module.exports = (req, res) => {
  db.sequelize.models.users.findAll({
    where: {
      [op.or]: [
        {
          firstName: {
            [op.like]: `%${req.params.name}%`,
          },
        },
        {
          lastName: {
            [op.like]: `%${req.params.name}%`,
          },
        },
      ],
    },
  })
    .then(users => res.status(200).json({ users }));
};
