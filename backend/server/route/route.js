const express = require('express');
const router = express.Router();
const userController = require('../controller/controller');

router.get('/getAll', userController.getAllUsers);
router.post('/post', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delet/:id', userController.deleteUser);

module.exports = router;
