
var yifu=angular.module('yifu', ['ngRoute']);
yifu.run(["$rootScope",function($rootScope){
  $rootScope.isflag=false;
  $rootScope.switcher=function(){
    $rootScope.isflag=!$rootScope.isflag;
  };

}]);
yifu.controller("nav_Ctrl",["$scope",function($scope){
  //跳转的内容
}]);
