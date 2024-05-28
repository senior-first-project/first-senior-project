const { log } = require('console');
const User = require('../model/model');

function getAllUsers(req, res) {
  User.findAll()
    .then(users => res.json(users))
    .catch(error => {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

function createUser(req, res) { console.log("HELLO");
  const { username, email, password } = req.body;
  User.create({ username, email, password })
    .then(newUser => res.status(201).json(newUser))
    .catch(error => {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

function updateUser(req, res) {
  const { id } = req.params;
  const { username, email, password } = req.body;
  
  User.update({ username, email, password }, { where: { id } })
    .then(updated => {
      if (updated[0] === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    })
    .catch(error => {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

function deleteUser(req, res) {
  const { id } = req.params;
  
  User.destroy({ where: { id } })
    .then(deleted => {
      if (!deleted) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
