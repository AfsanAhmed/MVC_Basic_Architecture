const express = require("express");
const { getUser, saveUser } = require("../controller/userController");
const router = express.Router();

router.get("/users",getUser);
router.post("/users",saveUser);

module.exports = router;