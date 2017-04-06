angular.module('app')
    .service('recipeService', function($http) {

        return {
          getSearch: function(x) {
            return $http.get('http://food2fork.com/api/search?key=c12cb3dce103a4fd355d294ac6082e1b&count=4&q=' + x);
            },
            getAll: function(x) {
              return $http.get('http://food2fork.com/api/search?key=c12cb3dce103a4fd355d294ac6082e1b&count=4&q=' + x);
            },
            getById: function(id) {
              return $http.get('http://food2fork.com/api/get?key=c12cb3dce103a4fd355d294ac6082e1b&rId=' + id);
            },
          };
          });
