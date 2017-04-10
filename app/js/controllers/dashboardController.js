
angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService,$state, recipeService) {

      $scope.showDetail = function (id) {
        $state.go('anon.detail', {id: id});
      };


        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            $scope.recipes = [];
            res.data.liked.forEach(function(recipe){
            recipeService.getById(recipe.recipeId).then(function(res){
              $scope.recipes.push(res.data.recipe);
              console.log($scope.recipes);
            });
          });
        });

    });
