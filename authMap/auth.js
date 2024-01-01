const mp=new Map();
function setMap(sessionid,user){
mp.set(sessionid,user)
console.log(mp)
}
function getMap(sessionid){
    return mp.get(sessionid);
    console.log(mp);
}
module.exports={setMap,getMap};