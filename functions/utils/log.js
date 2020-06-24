  
var fs = require('fs');
var path = require('path');
var moment = require('moment');
exports.writeLog = function writeToLog(action){
 fs.appendFileSync(path.join(__dirname + `../../database/log.txt`,), `${action}, ${moment().format('LLLL')}`);
}
exports.readLog = function readLog(){
  let data = fs.readFileSync(path.join(__dirname + `../../database/log.txt`));
  console.log(data.toString())
  return data.toString();
}
// exports.createLog = function createLog(userid, action){
//   fs.writeFileSync(path.join(__dirname + `../../database/log.txt`,), `${action}, ${moment().format('LLLL')}`);
// }