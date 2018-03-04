module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    phone: {
      type: DataTypes.STRING,
    },
  }, {});
  User.associate = (models) => {
    console.log(models);
    // associations can be defined here
  };
  return User;
};
