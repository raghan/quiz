/**
 * Created by raghan on 7/30/2014.
 */
var module = angular.module('myApp', []);
module.factory('httpData',function httpData($http,$log){

    return{
        getData: function (successcb) {
            $http({method: 'GET', url: 'data.json'}).
                success(function (data, status, headers, config) {
                    console.log("varuthu");
                    successcb(data);
                }).
                error(function (data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                    alert(data);
                })
        }
    }

});

module.controller('MyCtrl', function ($scope,httpData){

    var json;
    httpData.getData(function(data){

        json = JSON.stringify(data);
       return json;

    })


    $scope.getBlob = function(){
        return new Blob([json], {type: "application/json"});
    }


});

module.directive('myDownload', function ($compile) {
    return {

        scope:{ getUrlData:'&getData'},
        link:function (scope, elm, attrs) {
            var url = URL.createObjectURL(scope.getUrlData());
            elm.append($compile(
                    '<a class="btn" download="backup.json"' +
                    'href="' + url + '">' +
                    'Download' +
                    '</a>'
            )(scope));
        }
    };
});