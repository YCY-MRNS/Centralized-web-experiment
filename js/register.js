angular.module('myApp', []).controller("signUpController", function ($scope) {

    $scope.userdata = {};
    $scope.submitFrom = function () {
        console.log($scope.userdata);
    }

});

