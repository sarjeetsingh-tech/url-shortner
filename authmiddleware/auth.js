const { getMap } = require("../authMap/auth");

async function checkLogin(req, res, next) {
    const sessionid = req.cookies?.uid;
    if (!sessionid) return res.redirect("/login");
    const user = getMap(sessionid);
    if (!user) return res.redirect("/login")
    req.user = user;
    next();
}

module.exports = { checkLogin };
