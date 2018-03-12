const db = require('../../models/index');

module.exports = (req, res) => {
  console.log(db.sequelize.models.supplier);
  db.sequelize.models.suppliers.findAll()
    .then(supplier => res.status(200).json({ supplier }));
};
