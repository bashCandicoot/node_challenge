const db = require('../../models/index');

module.exports = (req, res) => {
  db.sequelize.models.suppliers.findAll({
    where: {
      supplierId: req.params.id,
    },
  })
    .then(supplier => res.status(200).json({ supplier }));
};

