var app = angular.module('app', ['ui.bootstrap']);

app.controller('DatePickerController', ['$scope', function ($scope) {
    $scope.date = new Date();
    $scope.datePickerOpen = false;
    $scope.toggleDatePicker = function($event) {
	// これが重要！！！
	$event.stopPropagation();

	$scope.datePickerOpen = !$scope.datePickerOpen;
    };
}]);
