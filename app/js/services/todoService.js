angular.module('app')
    .service('TodoService', function($http) {
        return {
          getAll: function (){
            return $http.get('/todos');
          },
          create: function (todo) {
            return $http.post('/todos', todo);
          }
        };
    });
