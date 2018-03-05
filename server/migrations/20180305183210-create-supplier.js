module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('suppliers', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    supplierId: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.ENUM,
      values: ['PRIVATE', 'AGENCY'],
    },
    signedTerms: {
      type: Sequelize.BOOLEAN,
    },
    vatNumber: {
      type: Sequelize.TEXT,
    },
    addressId: {
      type: Sequelize.INTEGER,
    },
    masterUser: {
      type: Sequelize.INTEGER,
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
  down: queryInterface => queryInterface.dropTable('suppliers'),
};
