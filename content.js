/**
 * Created by raghan on 7/30/2014.
 */
var downloadButton=function ($scope) {

    var content = 'file content';
    var blob = new Blob([ content ], { type: 'text/plain' });
    $scope.url = (window.URL || window.webkitURL).createObjectURL(blob);
    console.log((window.URL || window.webkitURL).createObjectURL(blob));
};