let activePlayer = "X";
let selectedSquares = [];

function placeXOrO(squareNumber) {
	if (!selectedSquares.some(element => element.includes(squareNumber))) {
		let select = document.getElementById(squareNumber);
		if (activePlayer === 'X') {
			select.style.backgroundImage = 'url("images/x.png")';
		} else  {
			select.style.backgroundImage = 'url("images/o.png)';
		}
		selectedSquares.push(squareNumber + activePlayer);
		checkWinConditions();
		if (activePlayer === 'X') {
			activePlayer = 'O';
		} else { 
			activePlayer = 'X';
		}
		audio('.media/place.mp3');
		if(activePlayer === 'O') {
			disableClick();
			setTimeout(function () { computersTurn();}, 1000)
		}
		return true;
	}
	function computersTurn() {
		let success = false;
		let pickASquare;
		while(!success) {
			pickASquare = String(Math.floor(math.random() * 9));
			if (placeXOrO(pickASquare)) {
				placeXOrO(pickASquare);
				success = true;
			};
		}
	}	
}
//this function parses the selected squares array for win conditions
function checkWinConditions() {
	if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
	else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
	else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
	else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
	else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
	else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
	else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
	else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
	else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558, 100); }
	else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558, 304); }
	else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558, 508); }
	else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100, 558); }
	else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558); }
	else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558); }
	else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90); }
	else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520); }
	else if (selectedSquares.length >= 9) {
		audio('./media/tie.mp3');
		setTimeout(function () {resetGame();}, 1000);
	}
	function arrayIncludes(squareA, squareB, squareC) {
		const a = selectedSquares.includes(squareA);
		const b = selectedSquares.includes(squareB);
		const c = selectedSquares.includes(squareC);
		if (a === true && b === true && c === true) {return true;}
	}
}

//makes body element unclickable
function disableClick() {
	body.style.pointerEvents = 'none';
	setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {
	let audio = new Audio('/media/place.mp3');
	audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
	const canvas = document.getElementById('win-lines');
	const c = canvas.getContext('2d');
	let x1 = coordX1, 
	y1 = coordY1,
		x2 = coordX2,
		y2 = coordY2,
		x = x1,
		y = y1;
	
	// this function interacts with the canvas
	function animationLineDrawing() {
		const ainmationLoop = requestAnimationFrame(animationLineDrawing);
		c.clearRect(0, 0, 608, 608);
		c.beginPath();
		c.moveTo(x1, y1);
		c.lineTo(x, y);
		c.lineWidth = 10;
		c.strokeStyle = 'rgba(70, 255, 33, .8)';
		c.stroke();
		if (x1 <= x2 && y1 <= y2) {
			if (x < x2) { x += 10;}
			if (y < y2) { y += 10;}
			if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
		}
		
		function clear() {
			const animationLoop = requestAnimationFrame(clear);
			c.clearRect(0, 0, 608, 608);
			cancelAnimationFrame(animationLoop);
		}
	}
		disableClick();
		audio('./media/winGame.mp3');
		animateLineDrawing();
		setTimeout(function (){ clear(); resetGame(); }, 1000);
		
	
}

function resetGame() {
	for (let i = 0; i < 9; i++) {
		let square = document.getElementById(String(i));
		square.style.backgroundImage = '';
	}
	selectedSquares = [];
}