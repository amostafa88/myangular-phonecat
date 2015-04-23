var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	
	  $scope.phones = [
	                   {'name': 'Nexus S',
	                    'snippet': 'Fast just got faster with Nexus S.',
	                    'age': 1},
	                    
	                   {'name': 'Motorola XOOM™ with Wi-Fi',
	                    'snippet': 'The Next, Next Generation tablet.',
	                    'age': 2},
	                    
	                   {'name': 'MOTOROLA XOOM™',
	                    'snippet': 'The Next, Next Generation tablet.',
	                    'age': 3}
	                    
	                    
	                 ];

	  $scope.name='World'
	  $scope.orderProp = 'age';
	  
	  
});



phonecatApp.controller('PhoneListCtrl5', ['$scope', '$http',
                                          function ($scope, $http) {
 	
 	$http.get('phones/phones.json').success(function(data) {
 		$scope.phones = data;
 		//$scope.phones = data.splice(0, 5);
 	});

 	
 	$scope.orderProp = 'age';
 	
 	
 }]);

