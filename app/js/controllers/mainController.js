angular.module('app')


    .controller('MainController', function($scope,$sce, recipeService, $state, Auth, UserService, CurrentUser) {
        var userId = CurrentUser.user()._id;
        $scope.errors = [];
        $scope.url="";
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

        $scope.selected = '';

        $scope.show = function(name) {
            $scope.selected = $scope.selected + ' ' + name;

        };

        $scope.dairy = ['Butter', 'Eggs', 'Milk', 'Sour', 'Sugar', 'Parmesan', 'Cheddar', 'Cream', 'Sour Cream', 'Cream Cheese', 'Mozzarella', 'Yogurt', 'Feta', 'Goat Cheese', 'ButterMilk', 'Ricotta', 'Provolone', 'Gouda', 'Gruyere', 'Mascarpone', 'Whipped Cream', 'Ghee'];
        $scope.meat = ['Bacon', 'Beef', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Bratwurst', 'Ribs', 'Salami', 'Prosciutto', 'Venison'];
        $scope.fish = ['Salmon', 'Fish fillets', 'Tilapia', 'Haddock', 'Grouper', 'Cod', 'Anchovies', 'Tuna steack', 'Sardines', 'Catfish', 'Perch', 'Caviar', 'Sole', 'Bluefish', 'Red snapper', 'Mackerel', 'Swordfish', 'Monkfish', 'Smoked', 'Barramundi', 'Herring'];
        $scope.fruits = ['Apple', 'Banana', 'Coconut', 'Mango', 'Lime', 'Orange', 'Pineapple', 'Strawberries', 'Raisins', 'Blueberries', 'Prunes', 'Nectarine', 'Peach', 'Apricot', 'Watermelon', 'Kiwi', 'Mandarin', 'Lychee', 'Passion Fruit', 'Papaya', 'Kumquat', 'Fig', 'Cherry'];
        $scope.spices = ['Basil', 'Ground Cumin', 'Salgon Cinnamon', 'Bay Leaves', 'Paprika', 'Thyme', 'Oregano', 'Red pepper', 'Chineses Spices', 'Curry', 'Mustard', 'Salt', 'Cajun', 'Ginger', 'Chili', 'Chive', 'Parsley', 'Shallot', 'Cloves', 'Chilli pepper', 'Nutmeg', 'Saffron', 'Mint'];
        $scope.vegetables = ['Garlic', 'Onion', 'Olive', 'Tomatoes', 'Potato', 'Salads greens', 'Carrot', 'Basil', 'Rosemary', 'Bell pepper', 'Corn', 'Ginger', 'Mushrooms', 'Broccoli', 'Spinach', 'Greens Beans', 'Celery', 'Pumpkin', 'Asparagus', 'Avogado', 'Cabbage', 'Zucchini', 'Cucumbers'];


         $scope.ingredients = $scope.dairy;



        $scope.showRecipe1 = function() {
            recipeService.getSearch($scope.selected).then(function(res) {

                $scope.datas = res.data.recipes;

            });
        };

        $scope.showRecipe = function() {
            recipeService.getAll($scope.selected).then(function(res) {
                $scope.datas = res.data.recipes;

            });
        };
        $scope.showRecipe();

        $scope.change = function () {
          recipeService.getSearch($scope.selected).then(function(res) {
              $scope.datas = res.data.recipes;

          });

        };

        $scope.showDetail = function (id) {
          $state.go('anon.detail', {id: id});
        };

        $scope.addfav = function (recipeId) {
          UserService.addFav(userId,recipeId).then(function(res){
            console.log(res);
          }, function (err) {

          });

        };

    });
