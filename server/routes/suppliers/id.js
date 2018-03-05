const db = require('../../models/index');

module.exports = (req, res) => {
  db.sequelize.models.suppliers.findAll({
    where: {
      supplierId: req.params.id,
    },
  })
    .then(suppliers => res.status(200).json({ suppliers }));
};

