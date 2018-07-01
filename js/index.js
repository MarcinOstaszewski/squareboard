$(function() {  

	var xOffset = 0, yOffset = 0;
	// var xSize = 12;
	// var ySize = 7;
	var shift = 10;	
	var fieldSize = 40;
	// $('.square').css({width: fieldSize, height : fieldSize});
	var fieldTypes = ["frst", "mntn", "rvr", "hlls", "dsrt"]; 
	var board = $('#board');

	var squaresOnBoard = [];

	// for (var i = -xSize; i < xSize; i++) {
	// 	for (var j = -ySize; j <= ySize; j++) {
	// 		var thisSquare = [ i , j ,  fieldTypes[ ( Math.floor( Math.random() * fieldTypes.length ) ) ] ];
	// 		squaresOnBoard.push(thisSquare);
	// 	}
	// }

	function createMountainChain() {
		// wybiera punkt początkowy - 0, 0
		// var startPoint = [2, 2];
		var currentPoint = [1, 1]; 
		var maxDistance = 16;
		// wybiera punkt koncowy - 20, 20
		var endPoint = [Number((Math.random()*maxDistance).toFixed(0)),    Number((Math.random()*maxDistance).toFixed(0)) ];    // var xDistance = endPoint[0] - currentPoint[0];    // var yDistance = endPoint[1] - endPoint[1]; 
		console.log(endPoint)
		// liczy przesunięcie poziome i pionowe oraz ich sumę i zapisuje w tablicy
		// var startEndChange = [
		// 	endPoint[0] - currentPoint[0],
		// 	endPoint[1] - currentPoint[1],
		// 	(endPoint[0] - currentPoint[0]) + (endPoint[1] - currentPoint[1])
		// ];
		// console.log(startEndChange);
		console.log(endPoint[0]  + endPoint[1])
		// w pętli for od 1 do sumy różnic w pionie i poziomie...
		for (var i = 0; i <= ( endPoint[0]  + endPoint[1] ); i++ ) {
			// tworzy pole góry o aktualnych współrzędnych
			var thisSquare = [currentPoint[0], currentPoint[1], "mntn"];
			// dodaje je do tablicy pól
			squaresOnBoard.push(thisSquare);
			// losuje czy przechodzi w pionie czy w poziomie (z szansą zależną od stosunku różnic pionu i poziomu)
			var random = Math.random().toFixed(2);
			var division = ( ( endPoint[0] - currentPoint[0] ) / ((endPoint[0] - currentPoint[0]) + (endPoint[1] - currentPoint[1])) ).toFixed(2);
			console.log( "["+currentPoint[0]+","+currentPoint[1]+"] : " + random + " < " + division + " is " + (random < division) + " =( " + endPoint[0] + "-" + currentPoint[0] + ") /" + ((endPoint[0] - currentPoint[0]) + (endPoint[1] - currentPoint[1])) + ")" );

			if ( random < division ) {
				//Przesuwa się w prawo 
				
				var thisSquare1 = [currentPoint[0], currentPoint[1]-1, "mntn"];
				var thisSquare2 = [currentPoint[0], currentPoint[1]+1, "mntn"];
				squaresOnBoard.push(thisSquare1);
				squaresOnBoard.push(thisSquare2);

				currentPoint[0] = currentPoint[0] + 1;
			} else {

				var thisSquare1 = [currentPoint[0]-1, currentPoint[1], "mntn"];
				var thisSquare2 = [currentPoint[0]+1, currentPoint[1], "mntn"];
				squaresOnBoard.push(thisSquare1);
				squaresOnBoard.push(thisSquare2);

				currentPoint[1] = currentPoint[1] + 1;
			}
		}
		console.log(currentPoint);
	}

	createMountainChain();

	// console.log(squaresOnBoard);
	
	function createBoard(xOffset, yOffset) {
		for (var i = 0; i < squaresOnBoard.length; i++) {
			// if (squaresOnBoard[i][0] < -2 * fieldSize && squaresOnBoard[i][1] < -2 * fieldSize ) {
				board.append('<div class="square '+ squaresOnBoard[i][2] + '" style="left: ' + Number(squaresOnBoard[i][0] * fieldSize + xOffset) + 'px; top: ' +  Number(squaresOnBoard[i][1] * fieldSize + yOffset) + 'px;">' + squaresOnBoard[i][0] + ',' + squaresOnBoard[i][1] + '</div>');
			// }
		}
	}
	createBoard(xOffset, yOffset);

	// function moveBoard(xOffset, yOffset) {
	// 	for (var i = -5; i < 10; i++) {
	// 		for (var j = -5; j < 5; j++) {
	// 			board.append('<div class="square" style="left: ' + Number(i * 100 + xOffset) + 'px; top: ' +  Number(j * 100 + yOffset) + 'px; background-color:'+ squareColor + ';">');
	// 		}
	// 	}
	// }
	// moveBoard(xOffset, yOffset);
	
	$('body').keydown( function(event) {
		var key = event.originalEvent.key
		if (key == "s") {
			yOffset -= shift;
		}
		if (key == "w") {
			yOffset += shift;
		}
		if (key == "d") {
			xOffset -= shift;
		}
		if (key == "a") {
			xOffset += shift;
		}
		board.children().remove();
		createBoard(xOffset, yOffset);
	})
});

// methods for creating random color
// var squareColor = 'rgb(' + (Math.random() * 256).toFixed(0) + ', ' + (Math.random() * 256).toFixed(0) + ', ' + (Math.random() * 256).toFixed(0) + ')'
// var hexColor = Math.floor(Math.random()*16777215).toString(16);