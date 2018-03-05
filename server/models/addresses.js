

module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('addresses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    line1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    line2: {
      type: DataTypes.STRING,
    },
    town: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  // Address.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Addresses;
};
