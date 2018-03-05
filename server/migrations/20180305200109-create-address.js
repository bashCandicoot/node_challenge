module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('addresses', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    addressId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    line1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    line2: {
      type: Sequelize.STRING,
    },
    town: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postcode: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('addresses'),
};
