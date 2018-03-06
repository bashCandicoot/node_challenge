module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 60],
          msg: 'First name must be no longer than 60 characters.',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 60],
          msg: 'Last name must be no longer than 60 characters.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: {
          args: [0, 60],
          msg: 'Email address must be no longer than 60 characters.',
        },
      },
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['TENANT', 'SUPPLIER'],
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 15],
          msg: 'Phone number must be between 6-15 characters.',
        },
      },
    },
  }, {});
  // User.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Users;
};
