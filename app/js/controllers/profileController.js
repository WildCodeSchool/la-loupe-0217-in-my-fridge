angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser, UserService) {

        $scope.user = CurrentUser.user();
        delete $scope.user.password;
        console.log($scope.user);

        $scope.updateUser = function() {
            UserService.update($scope.user._id, $scope.user).then(function(res) {
                //good
            }, function(err) {
                //bad
            });
        };

    });
