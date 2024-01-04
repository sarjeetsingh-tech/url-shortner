const { getMap } = require("../authMap/auth");
const User = require("../models/user");

async function checkForAuthentication(req, res, next) {
    // const sessionid = req.cookies?.uid;
    // if (!sessionid) return res.redirect("/login");
    // const user = getMap(sessionid);
    // if (!user) return res.redirect("/login")
    // req.user = user;
    console.log("step:1")
    const token = req.cookies?.uid;
    req.user=null;
    if (!token) return next();
    const decodedToken = getMap(token);
    const user = await User.findOne({
        username: decodedToken.username,
        email: decodedToken.email
    })
    // console.log(user)
    req.user = user;
    // console.log(decodedToken);
    return next();
}
function restrictTo(roles=[]){
return function(req,res,next){
    if(!req.user) return res.redirect("/login");
    if(!roles.includes(req.user.role)) res.end("unauthorized");
    return next();
}
}

module.exports = { checkForAuthentication,restrictTo };
