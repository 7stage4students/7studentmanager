const moment = require('moment');

exports.time = () =>{
   const now = moment().format('LLLL');
   return `${now}`;
}
exports.property = () =>{
   let  _time = moment().format();
   _time =  _time.substring(0,10); 
   _time = '_' + _time
  return  _time.replace(/-/g,'_');
}
