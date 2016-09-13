app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
	$scope.mains = [
    {
      name: 'Meatball',
      description: 'Meat ball served with tomato sauce.',
      price: 3.99
    },
    {
      name: 'Pasta al Pesto',
      description: 'pasta with basil and cheese.',
      price: 7.00
    },
    {
      name: 'Lasagna',
      description: 'Lasagna with bolognese sauce.',
      price: 13.99
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Pepperoni',
      description: 'Served with chilly pepperoni.',
      price: 5.00
    },
    {
      name: 'Salami',
      description: 'Served with italian salami.',
      price: 6.55
    }
  ];

}]);
