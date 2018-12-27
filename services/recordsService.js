const mongoose = require('mongoose');
const models = require('../models');
var helper   = require('../helper');

var createRecords = function( payload, callback ){
    let Records = new models.Records(payload);
		  Records.save( payload, function(err, Records ){
		          if (err) {
		              callback(err);
		              return;
		          }
		          callback(null, Records);
		  })
}
//--------------------------------------------------------------------------------------------------------
var updateRecords = function (criteria, details,options, callback){
      models.Records.updateOne(criteria, details,options,callback);
}
//--------------------------------------------------------------------------------------------------------
var getOneValue = function ( criteria, projections, options, callback){
  options.lean = true;
  models.Records.findOne( criteria, projections, options, callback )
}
//--------------------------------------------------------------------------------------------------------
var deleteRecords = function (RecordsId, callback){
  models.Records.findByIdAndRemove(RecordsId, callback);
}
//--------------------------------------------------------------------------------------------------------
var FindRecords = function ( criteria, projections, options, callback){
  options.lean = true;
  models.Records.find( criteria, projections, options, callback );
}
//------------------------------------------------------------------------------------------------
var aggregation = function(query,callback)
{
    models.Records.aggregate([query],callback);
}

//----------------------------------------------------------------------------------------//
/*                                |async-mongo|                                           */
//------------------------------------async-----------------------------------------------//
var asyncUpdate = function (criteria, details,options){
      return models.Records.update(criteria, details,options);
}

var asyncFindOne = function ( criteria, projections, options){
  options.lean = true;
  return models.Records.findOne( criteria, projections, options )
}

var asyncFindByIdAndRemove = function (criteria){
  return models.Records.findByIdAndRemove(criteria);
}

var asyncFind = function ( criteria, projections, options){
  options.lean = true;
  return models.Records.find( criteria, projections, options );
}

var asyncRemove = function ( criteria, projections, options){
  return models.Records.remove( criteria, projections, options );
}

var asyncAggregation = function(query){
    return models.Records.aggregate([query]);
}

module.exports={
    'createRecords'							  	 : createRecords,
    'getOneValue'								  	 : getOneValue,
		'updateRecords'							  	 : updateRecords,
		'deleteRecords'								   : deleteRecords,
		'FindRecords'									   : FindRecords,
    'aggregation'                    : aggregation,
    //async
    'asyncUpdate'									   : asyncUpdate,
    'asyncFindOne'								   : asyncFindOne,
    'asyncFindByIdAndRemove'				 : asyncFindByIdAndRemove,
    'asyncFind'									     : asyncFind,
    'asyncAggregation'               : asyncAggregation,
    'asyncRemove'                    : asyncRemove
};
