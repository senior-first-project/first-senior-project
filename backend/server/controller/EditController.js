const db = require('../database/index');
module.exports = {
  getAll: async (req, res) => {
    try {
      const Edit = await db.Edit.findAll({});
      res.status(200).send(Edit);
    } catch (error) {
      throw error;
    }
  },

  postEdit: async (req, res) => {
    try {
      const Edit = await db.Edit.create(req.body);
      res.status(201).send(Edit);
    } catch (error) {
      throw error;
    }
  },

//   updateEdit: async (req, res) => {
//     try {
//       const Edit = await db.Edit.update(req.body, {
//         where: { id: req.params.id },
//       });
//       res.status(201).send(Edit);
//     } catch (error) {
//       throw error;
//     }
//   },

//   deleteEdit: async (req, res) => {
//     try {
//       const Edit = await db.Edit.destroy({
//         where: { id: req.params.id },
//       });
//       res.json(Edit);
//     } catch (error) {
//       throw error;
//     }
//   },
  
};
