const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize('ecommerceSenior',"root", "root",{


  host: "localhost",
  dialect: "mysql",
});
 const user =require('./model')
user(connection)
async function testconnection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection();
const db = {};

const initApp = async () => {
  console.log("Testing the database connection..");

  try {
      await connection.sync()
      console.log("database create");

 
 
  } catch (error) {
      console.log( error);
  }
};

initApp()