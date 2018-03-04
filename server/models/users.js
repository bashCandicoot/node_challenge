module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['TENANT', 'SUPPLIER'],
    },
    phone: {
      type: DataTypes.STRING,
    },
  }, {});
  // User.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return User;
};
