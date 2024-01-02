const { getMap } = require("../authMap/auth");
const User = require("../models/user");

async function checkLogin(req, res, next) {
    // const sessionid = req.cookies?.uid;
    // if (!sessionid) return res.redirect("/login");
    // const user = getMap(sessionid);
    // if (!user) return res.redirect("/login")
    // req.user = user;
    const token = req.cookies?.uid;
    if (!token) return res.redirect("/login")
    const decodedToken = getMap(token);
    const user = await User.findOne({
        username: decodedToken.username,
        email: decodedToken.email
    })
    req.user = user;
    console.log(decodedToken);
    next();
}

module.exports = { checkLogin };
