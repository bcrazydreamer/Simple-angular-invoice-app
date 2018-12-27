function validatePrice(e){
  reg = /^[0-9]+(\.[0-9]+)?$/;
  val = e.value;
  if(!reg.test(val)){
    // val = e.value.replace(/^(\d*\D+\d*)*$/ , "");
  }
  e.value = val;
}
function closepop(){
  $(".popupboxbody").css("display","none");
}
function successPop(){
  $(".popupboxbody").css("display","inline");
  setTimeout(function(){
     $(".popupboxbody").css("display","none");
   }, 2000);
}
var app = angular.module('billingApp', []);
    app.controller('billController', function($scope, $http) {
      $scope.item = {};
      $scope.item.itemname = "";
      $scope.item.type = "";
      $scope.item.price = 0;
      $scope.popmessage = "";
      $scope.priceValidation = /^[\d]+([.][\d]+)?$/;
        $scope.submitForm = function() {
          console.log($scope.item);
          $http({
            method  : 'POST',
            url     : '/saveBill',
            data    : $scope.item,
            headers : { 'Content-Type': 'application/json' }
           })
           .then(function mySuccess(response) {
                // callPrintFunction($scope.item);
                $scope.item.itemname = "";
                $scope.item.type = "";
                $scope.item.dealer = "";
                $scope.item.price = 0;
                console.log("Success-->",response);
                $scope.popmessage = "Invoice Saved";
                successPop();
           }, function myError(response) {
               console.log("Error-->",response.data,response.status);
               $scope.popmessage = response.data;
               successPop();
           });
        };
    });
function callPrintFunction(item){

  var popupWin = window.open('', '_blank', 'width=900,height=700,location=no');
  popupWin.document.write('<html><title id="title">Print Bill</title></head><body><h3><center>Bill</center></h3><br>');
  popupWin.document.write(`


    `);

}
