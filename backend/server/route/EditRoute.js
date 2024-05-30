const express = require("express");


const router = express.Router();


const { getAll, postEdit } = require("../controller/EditController");


router.get("/get", getAll);
router.post("/post", postEdit);



module.exports = router;