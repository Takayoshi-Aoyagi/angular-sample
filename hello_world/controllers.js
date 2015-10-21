var helloApp = angular.module('helloApp', []);

helloApp.controller('HelloController', function ($scope) {
    $scope.greeting = { text: 'Hello' };
});
