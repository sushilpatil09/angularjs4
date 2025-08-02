var app = angular.module('taskapp', []);

app.controller('taskcontroller', function($scope) {
    $scope.tasks = [
        { name: 'complete angularjs assignment', completed: false },
        { name: 'read mongoDB tutorial', completed: false },
        { name: 'practice python strings', completed: false },
        { name: 'prepare project demo', completed: false }
    ];
});
