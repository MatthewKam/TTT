var tttAppl = angular.module ('tttAppl', []);
tttAppl.controller('TttController', function ($scope) { 
	$scope.cells = [0,0,0,0,0,0,0,0,0];
	$scope.isXTurn = true;
	$scope.moveCount = 0;
	$scope.gameWinner = false;
	$scope.gameWinner2 = false;
	$scope.tieGame = false;
	$scope.changeVar = function(c){
		if (c == -1){
			return "O";
		}else if (c == 1) {
			return "X";
		}
	};
	$scope.newGame = function(newGame){
		$scope.moveCount = 0;
		$scope.gameWinner = false;
		$scope.gameWinner2 = false;
		$scope.tieGame = false;
		$scope.isXturn = true;
		for (var i = 0; i < 9; i++){
			$scope.cells[i] = 0;
		}
	}
	$scope.makeMove = function (cellindex) {
		if($scope.cells[cellindex]== 0 && !$scope.gameWinner && !$scope.gameWinner2 && !$scope.tieGame){
			$scope.cells[cellindex] = $scope.isXTurn ? 1 : -1;
			$scope.moveCount++;
			console.log($scope.moveCount);
			$scope.isXTurn = !$scope.isXTurn; 
			

			if(($scope.cells[0] + $scope.cells[1] + $scope.cells[2]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[0] + $scope.cells[1] + $scope.cells[2]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[3] + $scope.cells[4] + $scope.cells[5]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[3] + $scope.cells[4] + $scope.cells[5]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[6] + $scope.cells[7] + $scope.cells[8]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[6] + $scope.cells[7] + $scope.cells[8]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[0] + $scope.cells[3] + $scope.cells[6]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[0] + $scope.cells[3] + $scope.cells[6]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[1] + $scope.cells[4] + $scope.cells[7]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[1] + $scope.cells[4] + $scope.cells[7]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[2] + $scope.cells[5] + $scope.cells[8]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[2] + $scope.cells[5] + $scope.cells[8]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[0] + $scope.cells[4] + $scope.cells[8]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[0] + $scope.cells[4] + $scope.cells[8]) == -3){
				$scope.gameWinner2 = true;
			};

			if(($scope.cells[2] + $scope.cells[4] + $scope.cells[6]) == 3){
				$scope.gameWinner = true;
			}else if(($scope.cells[2] + $scope.cells[4] + $scope.cells[6]) == -3){
				$scope.gameWinner2 = true;
			};
			
			if ($scope.moveCount==9 && $scope.gameWinner==false && $scope.gameWinner2==false){
				$scope.tieGame = true;
			};
		};
	};
});
// 		[0,1,2], [3,4,5], [6,7,8], [0,3,6],
// 		[1,4,7], [2,5,8], [0,4,8], [2,4,6]