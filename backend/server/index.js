const express = require("express");
require("./database/index")
const route = require('./route/route')
const productroute = require('./route/productroute')




const cors = require('cors');
const app = express();
const PORT =4000; 

app.use(express.json());
app.use(cors());

app.use('/api', route)
app.use('/apii', productroute)
app.use(express.static(__dirname + "/../client/dist"));


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}!`);
});