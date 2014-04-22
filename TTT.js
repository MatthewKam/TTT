var tptApp = angular.module ('tptApp', []);
tptApp.controller('TptController', function ($scope) { 
	//Creates a 2D array
	$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
	$scope.isXTurn = true;
	$scope.makeMove = function (clickedCellindex) {
		$scope.cells[clickedCellindex] = $scope.isXTurn?"X":"O";
		$scope.isXTurn = !$scope.isXTurn; 
	};

}
);
