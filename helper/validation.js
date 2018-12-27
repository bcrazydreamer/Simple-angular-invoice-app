const reg = /^[0-9]+(\.[0-9]+)?$/;
function isNumeric(value) {
   return (value==Number(value))? true : false;
}
var validateRecordPayload = function(payload){
  try{
    if(!(payload.itemname && payload.itemname.length!=0)){
      return false;
    }
    if(!(isNumeric(payload.price) && payload.price && reg.test(payload.price))){
        return false;
    }
    return true;
  }catch(err){
    return false;
  }
}

module.exports = {
  "validateRecordPayload"   : validateRecordPayload
}
