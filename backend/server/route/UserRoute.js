const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, updateUser, deleteUser,login }= require('../controller/UserController');
const {InRole} =require("../roles"); 
// const { user } = require('../database');

router.get('/getAll',getAllUsers);
router.get("/signin/:email/:password",login)
router.post('/post', createUser);
router.put('/update/:id', updateUser);
router.delete('/delet/:id', deleteUser);

module.exports = router;
