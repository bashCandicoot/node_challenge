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
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
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
    },
  }, {});
  // User.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Users;
};
