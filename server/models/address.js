module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'addresses', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
            args: [0, 30],
            msg: 'The town name must be no longer than 30 characters.',
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
    },
    {
      // classMethods: {
      //   associate: (models) => {
      //     Address.belongsTo(models.Supplier, {
      //       foreignKey: 'supplierId',
      //       onDelete: 'CASCADE',
      //     });
      //   },
      // },
    },
  );
  return Address;
};
