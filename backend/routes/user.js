//green

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const password = require("../middleware/password");

router.post("/signup", password, userCtrl.userSignUp);
router.post("/login", password, userCtrl.userLogin);

module.exports = router;