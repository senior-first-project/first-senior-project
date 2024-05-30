const { Sequelize, DataTypes } = require("sequelize");
<<<<<<< HEAD
const User =require('./models/user')
const Product =require('./models/product')
const connection = new Sequelize('ecommercesenior',"root", "Aymen@2003",{
=======
const User =require('./models/UserModel')
const Prod= require('./models/productModel')
const connection = new Sequelize('ecommerceSenior',"root", "root",{
>>>>>>> c5a38b45a6f2c0345400627962bcf9038252dbd3
  host: "localhost",
  dialect: "mysql",
});

const product=Product(connection)
const user = User(connection)
const prod = Prod(connection)
const db = {
<<<<<<< HEAD
  user,
  product
=======
  user,prod

>>>>>>> c5a38b45a6f2c0345400627962bcf9038252dbd3
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
<<<<<<< HEAD
//       await connection.sync()
=======
//       await connection.sync( {force:true})
>>>>>>> c5a38b45a6f2c0345400627962bcf9038252dbd3
//       console.log("database create");

 
 
//   } catch (error) {
//       console.log( error);
//   }
// };

// initApp()
module.exports= db