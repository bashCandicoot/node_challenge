module.exports = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define('suppliers', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['PRIVATE', 'AGENCY'],
      allowNull: false,
    },
    signedTerms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    vatNumber: {
      type: DataTypes.TEXT,
      unique: true,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    masterUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  // Supplier.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Suppliers;
};
