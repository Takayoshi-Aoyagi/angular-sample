var app = angular.module('app', [
    'ngResource',
    'Controllers'
]);

var Controllers = angular.module('Controllers', []);

/**
 * Handle exception
 *
 * Display alert dialog, when exception occured
 */
app.factory('$exceptionHandler', function () {
    return function(exception, cause) {
	var msg = JSON.stringify(exception, null, '  ');
	var div = document.getElementById("err");
	div.innerText = "ERROR!!!!\n" + msg;
	//alert(msg + "\n" + cause);
	setTimeout(function () {
	    div.innerText = "";
	}, 3000);
    };
});

/**
 * for REST API
 *
 * Write interceptor to throw exception
 */
app.factory('Dummy', ['$resource', function ($resource) {
    return $resource('/api/dummies', {}, {
	query: {
	    method: 'GET',
	    interceptor: {
		responseError: function (data) {
		    throw data;
		}
	    }
	}
    });
    return null;
}]);                                                                                     

/**
 * Controller
 *
 * Nothing to do
 */
Controllers.controller('HelloController', ['$scope', 'Dummy', function ($scope, Dummy) {
    setTimeout(function () {
	Dummy.query();
    }, 2000);
}]);

