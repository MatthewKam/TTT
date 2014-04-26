

var tttAppl = angular.module ('tttAppl', ["firebase"]);

var playerNum;
var ticTacRef = new Firebase("https://tictacturtle.firebaseio.com/");

tttAppl.controller('TttController', function ($scope,$firebase){ 
	var lastGame;
 ticTacRef.once('value', function(gamesSnapshot) {
var games = gamesSnapshot.val();
if(games == null)
{
lastGame = ticTacRef.push( {waiting: true} );
playerNum = 1;
}
else
{
var keys = Object.keys(games);
var lastGameKey = keys[ keys.length - 1 ];
var lastGame = games[ lastGameKey ];
console.log("This person's game: " + lastGameKey);
if(lastGame.waiting)
{
lastGame = ticTacRef.child(lastGameKey);
lastGame.set( {
waiting :false, 
cells : [0,0,0,0,0,0,0,0,0],
isXTurn : true,
moveCount : 0,
gameWinner : false,
gameWinner2 : false,
tieGame : false
} );
playerNum = 2;
}
else
{
lastGame = ticTacRef.push( {waiting: true} );
playerNum = 1;
}
}
$scope.game = $firebase(lastGame);
});
	// $scope.game.cells = [0,0,0,0,0,0,0,0,0];
	// $scope.game.isXTurn = true;
	// $scope.game.moveCount = 0;
	// $scope.game.gameWinner = false;
	// $scope.game.gameWinner2 = false;
	// $scope.game.tieGame = false;
	$scope.newGame = function(newGame){
		$scope.game.moveCount = 0;
		$scope.game.gameWinner = false;
		$scope.game.gameWinner2 = false;
		$scope.game.tieGame = false;
		$scope.game.isXTurn = true;
		// $scope.game.$save();


		for (var i = 0; i < 9; i++){
			$scope.game.cells[i] = 0;
		}
	}
	$scope.makeMove = function (cellindex) {
		console.log($scope.game.isXTurn);	
		if($scope.game.cells[cellindex]== 0 && !$scope.game.gameWinner && !$scope.game.gameWinner2 && !$scope.game.tieGame){

			$scope.game.cells[cellindex] = $scope.game.isXTurn ? 1 : -1;
			$scope.game.moveCount++;
			console.log($scope.game.moveCount);
			$scope.game.isXTurn = !$scope.game.isXTurn;



			if(($scope.game.cells[0] + $scope.game.cells[1] + $scope.game.cells[2]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[0] + $scope.game.cells[1] + $scope.game.cells[2]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[3] + $scope.game.cells[4] + $scope.game.cells[5]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[3] + $scope.game.cells[4] + $scope.game.cells[5]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[6] + $scope.game.cells[7] + $scope.game.cells[8]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[6] + $scope.game.cells[7] + $scope.game.cells[8]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[0] + $scope.game.cells[3] + $scope.game.cells[6]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[0] + $scope.game.cells[3] + $scope.game.cells[6]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[1] + $scope.game.cells[4] + $scope.game.cells[7]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[1] + $scope.game.cells[4] + $scope.game.cells[7]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[2] + $scope.game.cells[5] + $scope.game.cells[8]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[2] + $scope.game.cells[5] + $scope.game.cells[8]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[0] + $scope.game.cells[4] + $scope.game.cells[8]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[0] + $scope.game.cells[4] + $scope.game.cells[8]) == -3){
				$scope.game.gameWinner2 = true;
			};

			if(($scope.game.cells[2] + $scope.game.cells[4] + $scope.game.cells[6]) == 3){
				$scope.game.gameWinner = true;
			}else if(($scope.game.cells[2] + $scope.game.cells[4] + $scope.game.cells[6]) == -3){
				$scope.game.gameWinner2 = true;
			};
			
			if ($scope.game.moveCount==9 && $scope.game.gameWinner==false && $scope.game.gameWinner2==false){
				$scope.game.tieGame = true;
			};
		};
		$scope.game.$save();
	};
});
// 		[0,1,2], [3,4,5], [6,7,8], [0,3,6],
// 		[1,4,7], [2,5,8], [0,4,8], [2,4,6]