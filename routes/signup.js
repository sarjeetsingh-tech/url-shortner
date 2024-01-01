const express = require("express");
const router = express.Router();
const { signup, signupSubmit } = require("../controllers/signup")
router.get("/", signup);
router.post("/",signupSubmit);
module.exports = router;