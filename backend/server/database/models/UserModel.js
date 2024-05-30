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
  },
  role:{
    type: DataTypes.ENUM("admin","user","client"),
    allowNull:false,
    defaultValue: "client"
  }

});
}
module.exports = User