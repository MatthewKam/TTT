var tttAppl = angular.module ('tttAppl', []);
tttAppl.controller('TttController', function ($scope) { 
	$scope.cells = [0,0,0,0,0,0,0,0,0];
	$scope.isXTurn = true;
		$scope.changeVar = function(c){
		if (c == -1){
			return "O";
		}else if (c == 1) {
			return "X";
		}
	};
	$scope.makeMove = function (cellindex) {
		if($scope.cells[cellindex]==' '){
			$scope.cells[cellindex] = $scope.isXTurn ? 1 : -1;
			$scope.isXTurn = !$scope.isXTurn; 
		};
		if(Math.abs($scope.cells[0] + $scope.cells[1] + $scope.cells[2]) == 3); 
			$scope.playerWon("top row", $scope.cells[0]);
		
		if(Math.abs($scope.cells[3] + $scope.cells[4] + $scope.cells[5]) == 3); 
			$scope.playerWon("middle row", $scope.cells[0]);
		
		if(Math.abs($scope.cells[6] + $scope.cells[7] + $scope.cells[8]) == 3); 
			$scope.playerWon("bottom row", $scope.cells[0]);
		
		if(Math.abs($scope.cells[0] + $scope.cells[3] + $scope.cells[6]) == 3); 
			$scope.playerWon("left column", $scope.cells[0]);
		
		if(Math.abs($scope.cells[1] + $scope.cells[4] + $scope.cells[7]) == 3); 
			$scope.playerWon("middle column", $scope.cells[0]);
		
		if(Math.abs($scope.cells[2] + $scope.cells[5] + $scope.cells[8]) == 3); 
			$scope.playerWon("right column", $scope.cells[0]);
		
		if(Math.abs($scope.cells[0] + $scope.cells[4] + $scope.cells[8]) == 3); 
			$scope.playerWon("\diagonal", $scope.cells[0]);
		
		if(Math.abs($scope.cells[2] + $scope.cells[4] + $scope.cells[6]) == 3); 
			$scope.playerWon("/diagonal", $scope.cells[0]);
	
	};

	$scope.playerWon = function(descrip, player)
	{
		alert( ((player == 1)?"X" : "O") + " won by " + descrip);
	}
});
// 		[0,1,2], [3,4,5], [6,7,8], [0,3,6],
// 		[1,4,7], [2,5,8], [0,4,8], [2,4,6]