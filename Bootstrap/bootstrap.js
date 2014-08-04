/**
 * Created by raghan on 8/1/2014.
 */
(function(){
    var app=angular.module("json",[])
    var json=function($scope,$http)
    {
        console.log("hello")

        $scope.message="hello";
    }
    app.controller("json",json)
}())