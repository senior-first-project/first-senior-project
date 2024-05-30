const{DataTypes} = require ('sequelize')
const sequelize = require ('../index')
     const Product=(sequelize)=>{
    return sequelize.define('Product', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      stock:{
       type: DataTypes.FLOAT,
      allowNull:false
      },
      picture: {
        type: DataTypes.STRING, 
        allowNull: false, 
      }
    });
  }

  module.exports = Product
