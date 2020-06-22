var qrcode = require('qrcode');
var fs = require('fs'); 
const path = require('path');
const code = (user) =>{
  

qrcode.toFile(path.join(__dirname,'../','qrcode',`${user.id}.png`), user.id)
console.log('qrcode has been saved');

return `../qrcode/${user.id}.png`;
 
}


module.exports = code;