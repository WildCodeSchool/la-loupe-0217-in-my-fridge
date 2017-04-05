angular.module('app')
    .controller('TodoController', function($scope, CurrentUser, TodoService) {

        $scope.user = CurrentUser.user();
        $scope.todos = [];

        $scope.newTodo = {
            content: '',
            done: false
        };

        $scope.addTodo = function() {
            TodoService.create($scope.newTodo).then(function(res) {
                //good
            }, function(err) {
                //bad
            });
        };
        TodoService.getAll().then(function(res) {
            $scope.todos = res.data;
        }, function(err) {
            //bad
        });
    });
