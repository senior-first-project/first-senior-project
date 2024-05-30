const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/getProducts', productController.getproducts);
module.exports = router;