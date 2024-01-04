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
        _id: user._id,
        role: user.role
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
}
function getMap(token) {
    const x = jwt.verify(token, secretKey)
    console.log(x);
    return x;
}
module.exports = { setMap, getMap };




