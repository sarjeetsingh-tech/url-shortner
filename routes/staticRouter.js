const express = require("express");
const router = express.Router();
const Url = require("../models/url")

router.get("/",async(req,res)=>{
    const id=req.user._id;
    const allUrls=await Url.find({generatedBy:id});
    // console.log(allUrls)
    res.render("home.ejs",{allUrls:allUrls,name:req.user.username});
})
router.get("/all",async(req,res)=>{
    // const id=req.user._id;
    const allUrls=await Url.find({});
    // console.log(allUrls)
    res.render("home.ejs",{allUrls:allUrls,name:"all"});
})
module.exports=router;