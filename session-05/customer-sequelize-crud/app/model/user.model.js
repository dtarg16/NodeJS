const {DataTypes } = require('sequelize');
 module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    level: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'users'
  });
  return User;
};