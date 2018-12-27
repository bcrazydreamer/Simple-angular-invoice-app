const mongoPort=27017;
const mongoUrl='mongodb://localhost:'+mongoPort+'/AngularApp';

var gst = {
  'Grocery' : 8,
  'Cloths'  : 12,
  'Footwear': 10,
  'Electronics': 18
}



module.exports = {
  'mongoUrl'   : mongoUrl,
  'gst'        : gst,
}
