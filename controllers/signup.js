const User = require("../models/user");
async function signup(req, res) {
    res.render("signup.ejs");
}
async function signupSubmit(req, res) {
    console.log(req.body);
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    await newUser.save();
    res.redirect("/login");
}
module.exports = { signup, signupSubmit }