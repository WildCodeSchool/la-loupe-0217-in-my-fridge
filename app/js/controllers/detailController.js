angular.module('app')
    .controller('DetailController', function($scope, $stateParams, recipeService, $sce) {
      $scope.recipe = "";

        recipeService.getById($stateParams.id).then(function(res) {
          console.log(res.data);
          $scope.recipe = res.data.recipe;
          $scope.ingredients = res.data.recipe.ingredients;
          $scope.bindHtml = $sce.trustAsHtml(recipe.publisher_url);
        });

    });
