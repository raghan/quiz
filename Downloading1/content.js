var module = angular.module('myApp', []);
var response1= null;
module.controller('MyCtrl', function ($scope,$http){
    var   response1= $http.get("package.json").success(function (response) {
        new Blob([response], {type: "application/json"});
 });

    $scope.getBlob = function(){
   console.log(response1);
          return
    };
});

/*
module.directive('myDownload', function ($compile) {
    return {
        restrict:'E',
        scope:{ getUrlData:'&getData'},
        link:function (scope, elm, attrs) {
            var url = URL.createObjectURL(scope.getUrlData());

            elm.append($compile(
                    '<a class="btn" ng download="backup.txt"' +
                    'href="'+url+'">' +
                    'Download' +
                    '</a>'
            )(scope));



        }
    };
});*/
