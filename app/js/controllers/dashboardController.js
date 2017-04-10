angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, recipeService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            $scope.recipes = [];
            res.data.liked.forEach(function(recipe){
            recipeService.getById(recipe.recipeId).then(function(res){
              $scope.recipes.push(res.data);
              console.log($scope.recipes);
            });
          });
        });

    });
