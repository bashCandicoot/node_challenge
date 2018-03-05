const db = require('../../models/index');

module.exports = (req, res) => {
  db.sequelize.models.suppliers.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then(suppliers => res.status(200).json({ suppliers }));
};

