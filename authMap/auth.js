// const mp=new Map();
// function setMap(sessionid,user){
// mp.set(sessionid,user)
// console.log(mp)
// }
// function getMap(sessionid){
//     return mp.get(sessionid);
//     console.log(mp);
// }


const jwt = require('jsonwebtoken');
const secretKey = 'My-Secret-Key';
function setMap(user) {
    const payload = {
        email: user.email,
        username: user.username,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token
}
function getMap(token) {
    return jwt.verify(token, secretKey)
}
module.exports = { setMap, getMap };




