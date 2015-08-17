angular.module('pasaaApp').controller('ItemCtrl', function ($scope,  $http) {

    $scope.idx = 0;
    $scope.items = [];
    $scope.currentItem = {};
    $http.get('data/items.json').
        success(function (data, status, headers, config) {
            $scope.items = data;
            console.log(data);
            $scope.currentItem = $scope.items[$scope.idx];
        }).
        error(function (data, status, headers, config) {
            $scope.items = [];
            $scope.currentItem = {};
        });
});
