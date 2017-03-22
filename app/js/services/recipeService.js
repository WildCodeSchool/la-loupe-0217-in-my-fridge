angular.module('app')
    .service('recipeService', function($http) {
        return {
            getAll: function() {
                return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83 ');
            }
        };
    });
