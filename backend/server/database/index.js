const { Sequelize, DataTypes } = require("sequelize");
const User =require('./models/UserModel')
const Prod= require('./models/productModel')
const connection = new Sequelize('ecommerceSenior',"root", "root",{
  host: "localhost",
  dialect: "mysql",
});

const user = User(connection)
const prod = Prod(connection)
const db = {
  user,prod

};
async function testconnection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection();

// const initApp = async () => {
//   console.log("Testing the database connection..");

//   try {
//       await connection.sync( {force:true})
//       console.log("database create");

 
 
//   } catch (error) {
//       console.log( error);
//   }
// };

// initApp()
module.exports= db