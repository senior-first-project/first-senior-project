const { DataTypes } = require('sequelize');
const sequelize =require('../index')
const User = (sequelize)=>{
return sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
}
module.exports = User