angular.module('app')
    .controller('MainController', function($scope, RecipeService, $state, Auth) {
      $scope.errors = [];

      recipeService.getAll().then(function(res){
        $scope.all = 'res.data' ;
        $scope.searchRecipes = '';
        console.log(res.data);
      });

      $scope.login = function() {
          if ($scope.loginForm.$valid) {
              $scope.errors = [];
              Auth.login($scope.user).then(function(result) {
                  $state.go('user.profile');
              }).catch(function(err) {
                  $scope.errors.push(err);
              });
          }
      };

      $scope.register = function() {
          Auth.register($scope.user).then(function() {
              $state.go('anon.home');
          });
      };

      /* Here is your main controller */
    });
