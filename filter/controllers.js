var helloApp = angular.module('helloApp', []);

helloApp.controller('FilterController', function ($scope) {
    $scope.types = [
	{
	    code: "A",
	    name: "Type-A"
	},
	{
	    code: "B",
	    name: "Type-B"
	}
    ];
    $scope.items = [
	{
	    code: 1,
	    name: "name1",
	    type: "A"
	},
	{
	    code: 2,
	    name: "name2",
	    type: "B"
	},
	{
	    code: 3,
	    name: "name3",
	    type: "A"
	},
	{
	    code: 4,
	    name: "name4",
	    type: "B"
	},
	{
	    code: 5,
	    name: "name5",
	    type: "A"
	}
    ];
});
