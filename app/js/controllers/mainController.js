angular.module('app')
    .controller('MainController', function($scope, recipeService) {
      recipeService.getAll().then(function(res){
        $scope.all = res.data ;
        console.log(res.data);
      });
      /* Here is your main controller */
    });
