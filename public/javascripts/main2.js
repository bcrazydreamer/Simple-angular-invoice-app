function closepop(){
  $(".popupboxbody").css("display","none");
}
function successPop(){
  $(".popupboxbody").css("display","inline");
  setTimeout(function(){
     $(".popupboxbody").css("display","none");
   }, 2000);
}
function getAllRecords($scope,$http){
  $http({
    method  : 'POST',
    url     : '/show',
    data    : {test:1234},
    headers : { 'Content-Type': 'application/json' }
   })
   .then(function mySuccess(response) {
       $scope.allitem = response.data;
       console.log("Success-->",response);
   }, function myError(response) {
       console.log("Error-->",response.data,response.status);
   });
}
var app = angular.module('showBillingApp', []);
    app.controller('showBillController', function($scope, $http) {
           $scope.items = {};
           getAllRecords($scope,$http);
           $scope.limit = 100;
           $scope.deleteDetail = function(item){
             $http({
               method  : 'POST',
               url     : '/deleteRecord',
               data    : {_id:item._id},
               headers : { 'Content-Type': 'application/json' }
              })
              .then(function mySuccess(response) {
                  $(".cc"+item._id).remove();
                  console.log("Success delete-->",response);
                  $scope.popmessage = item.itemname+ " deleted";
                  successPop();
              }, function myError(response) {
                  console.log("Error delete-->",response.data,response.status);
                  alert("Something went wrong");
              });
           }
           $scope.refreshList = function(){
             getAllRecords($scope,$http);
           }
    });
function callPrintFunction(item){

  var popupWin = window.open('', '_blank', 'width=900,height=700,location=no');
  popupWin.document.write('<html><title id="title">Print Bill</title></head><body><h3><center>Bill</center></h3><br>');
  popupWin.document.write(`


    `);

}
