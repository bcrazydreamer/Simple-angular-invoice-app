var bodyParser              = require('body-parser');
var mongoose                = require('mongoose');
var helper                  = require('../helper');
var services                = require('../services');
var models                = require('../models');

var createRecord = async function (data,callback) {
  if(!helper.validation.validateRecordPayload(data)){
    callback("Invalid Details");
    return;
  }
  var payload={};
  payload.itemname                = data.itemname;
  payload.createDate               = data.createDate;
  if(data.type){
      payload.type                  = data.type;
  }
  if(data.dealer){
    payload.dealer                  = data.dealer;
  }
  payload.price                   = data.price;
  try{
      let Records = new models.Records(payload);
      var response = await Records.save();
      callback(null,response);
      return;
  } catch(err){
    callback(err);
    return;
  }
}
//-------------------------Delete Record--------------------------------------------------
var deleteRecord = function(invoiceId,callback) {
      services.recordsService.deleteRecords({_id:mongoose.Types.ObjectId(invoiceId)}, (err,response) => {
        if(err){
            callback(err);
          }
          else {
            callback(err,response);
          }
      });
}
//-------------------------------------------------------------------------------------
var getRecords = function (criteria, projection, option, callback) {
    services.recordsService.FindRecords(criteria, projection, option, (err,response) => {
            if(err) {
                callback(err);
                return;
            } else {
                callback(err,response)
            }
        }
    );
}
//--------------------------------------------------------------------------------------
module.exports = {
  'createRecord'                              : createRecord,
  'getRecords'                                : getRecords,
  'deleteRecord'                              : deleteRecord
}
