const {prod} = require('../database/index');
const getproducts=(req, res) =>{
    prod.findAll()
    .then(users => res.json(prod))
    .catch(error => {
      console.error('Error fetching prod:', error);
      res.status(500).json({ message: 'Internal server error' });
    })}
    function createProduct(req, res) { console.log("HELLO");
  const { name, price, description,category,stock,picture } = req.body;
  prod.create({ name, price, description,category,stock,picture  })
    .then(newProduct => res.status(201).json(newProduct))
    .catch(error => {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}
    module.exports = { getproducts, createProduct}

