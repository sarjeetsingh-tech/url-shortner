const express = require("express");
const {login,loginSubmit}=require("../controllers/login");
const router = express.Router();
router.get("/",login);
router.post("/",loginSubmit);
module.exports=router;