var express = require('express');
var path    = require("path");
var bodyParser = require('body-parser');
var controllers = require('../controller');
var services   = require('../services');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/show', function(req, res) {
  res.render('show', { title: 'Express' });
});

router.post('/show', function(req, res) {
  criteria = {};
  projection = {};
  option = {};
  controllers.RecordController.getRecords(criteria, projection, option,(err,response)=>{
    if(err){
      res.status(500).json(err);
    }else{
      res.status(200).json(response);
    }
  });
});

router.post('/deleteRecord', function(req, res) {
  controllers.RecordController.deleteRecord(req.body._id, (err,response)=>{
    if(err){
      res.status(500).json(err);
    }else{
      console.log(response);
      res.status(200).json(response);
    }
  });
});

router.post('/saveBill', function(req, res) {
  controllers.RecordController.createRecord(req.body,(err,response)=>{
    if(err){
      res.status(500).json(err);
    }else{
      res.send("Saved");
    }
  });
});


router.get('/test', function(req, res, next) {

  res.send(
    [
		{name:"abcd",agree:0,disagree:0},
		{name:"befgh",agree:0,disagree:0},
		{name:"clalala",agree:0,disagree:0},
		{name:"d",agree:0,disagree:0},
		{name:"e",agree:0,disagree:0},
		{name:"f",agree:0,disagree:0},
		{name:"g",agree:0,disagree:0},
		{name:"h",agree:0,disagree:0}
		]
  );

});


module.exports = router;
