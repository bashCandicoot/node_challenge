module.exports = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define('suppliers', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['PRIVATE', 'AGENCY'],
    },
    signedTerms: {
      type: DataTypes.BOOLEAN,
    },
    vatNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    addressId: {
      type: DataTypes.INTEGER,
    },
    masterUser: {
      type: DataTypes.INTEGER,
    },
  }, {});
  // Supplier.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Suppliers;
};
