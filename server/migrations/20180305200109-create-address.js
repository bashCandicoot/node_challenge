module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('addresses', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    addressId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // supplierId: {
    //   type: Sequelize.INTEGER,
    //   onDelete: 'CASCADE',
    //   references: {
    //     model: 'Supplier',
    //     key: 'supplierId',
    //   },
    // },
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
