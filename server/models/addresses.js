

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
      validate: {
        len: {
          args: [0, 50],
          msg: 'Line 1 of your address must be no longer than 50 characters.',
        },
      },
    },
    line2: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 50],
          msg: 'Line 2 of your address must be no longer than 50 characters.',
        },
      },
    },
    town: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 20],
          msg: 'The town name must be no longer than 20 characters.',
        },
      },
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 10],
          msg: 'The postcode must be no longer than 10 characters.',
        },
      },
    },
  }, {});
  // Address.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Addresses;
};
