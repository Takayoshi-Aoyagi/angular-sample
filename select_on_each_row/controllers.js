var helloApp = angular.module('helloApp', []);

helloApp.controller('HelloController', function ($scope) {

    var num = 3;
    
    $scope.rows = [
	{
	    id: 1,
	    items: ["A", "B", "C"]
	},
	{
	    id: 2,
	    items: ["A", "B", "C"]
	}
    ];

    $scope.append = function () {
	var row = {
	    id: num,
	    items: ["A", "B", "C"]
	};
	num++;
	$scope.rows.push(row);
    };
});
