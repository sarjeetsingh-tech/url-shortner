const User = require("../models/user");
const { v4: uuidv4 } = require('uuid');
const {  setMap } = require("../authMap/auth")
async function login(req, res) {
    res.render("login.ejs");
}
async function loginSubmit(req, res) {
    console.log(req.body);
    const newUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    console.log(newUser);
    if (!newUser) return res.redirect("/login");
    // const sessionid = uuidv4();
    // res.cookie("uid", sessionid);
    // console.log(sessionid);
    // setMap(sessionid,newUser);
    const token = setMap(newUser);
    res.cookie("uid",token);
    res.redirect("/url");
}

module.exports = { login, loginSubmit };