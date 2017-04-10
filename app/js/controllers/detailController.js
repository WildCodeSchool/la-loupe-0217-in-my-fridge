angular.module('app')
    .controller('DetailController', function($scope, $stateParams, recipeService, CurrentUser, UserService) {
      $scope.recipe = "";

        recipeService.getById($stateParams.id).then(function(res) {
          console.log(res.data);
          $scope.recipe = res.data.recipe;
          $scope.ingredients = res.data.recipe.ingredients;
        });

        $scope.addfav = function (recipeId) {
          UserService.addFav(userId,recipeId).then(function(res){
            console.log(res);
          }, function (err) {

          });

        };

    });
