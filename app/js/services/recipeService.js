angular.module('app')
    .service('recipeService', function($http) {

        return {
          getSearch: function(x) {
            return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83&count=4&q=' + x);
            },
            getAll: function(x) {
              return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83&count=4&q=' + x);
            },
            getId: function (y) {
              return $http.get('http://food2fork.com/api/get?key=a9d96f05e69633450b746a68935e7b83&rId=');

            },
          };
        });
// <!-- faire regex pour virgules ou espaces  -->
// var table = [$scope.dairy,$scope.meat, $scope.fish,$scope.fruits, $scope.spices, $scope.vegetables];
// console.log(table);
