const express = require("express");
require("./database/index")
<<<<<<< HEAD
const route = require('./route/route')
const productroute = require('./route/productroute')
=======
const route = require('./route/productRoute.js')
const routel = require('./route/UserRoute.js')

>>>>>>> c5a38b45a6f2c0345400627962bcf9038252dbd3




const cors = require('cors');
const app = express();
const PORT =4000; 

app.use(express.json());
app.use(cors());

app.use('/api', route)
<<<<<<< HEAD
app.use('/apii', productroute)
=======
app.use('/api', routel)

>>>>>>> c5a38b45a6f2c0345400627962bcf9038252dbd3
app.use(express.static(__dirname + "/../client/dist"));


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});

