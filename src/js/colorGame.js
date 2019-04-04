var numSquares = 6;
var colors = [];
var pickColor;

var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("dispColor");
var messageDisplay = document.getElementById("msg");
var head1 = document.querySelector("h1");
var resetBut = document.getElementById("reset");
var gameModeBut = document.querySelectorAll(".modes");

initial();

function initial() {
	setupModes();
	setupSquares();
	reset();
}

function setupModes() {
	for (var i = 0; i < gameModeBut.length; i++) {
		gameModeBut[i].addEventListener("click", function(){
			gameModeBut[0].classList.remove("selected");
			gameModeBut[1].classList.remove("selected");
			gameModeBut[2].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent == "Easy") {
				numSquares = 3;
			}
			else if(this.textContent == "Medium") {
				numSquares = 6;
			}
			else {
				numSquares = 9;
			}
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){  // when the squares are clicked
			var clickedColor = this.style.backgroundColor; // takes the clicked color

			if (clickedColor === pickColor) { // checks if clicked color is same as pick color
				messageDisplay.textContent = "Correct";
				resetBut.textContent = "Play again?";
				changeBackColor(clickedColor);
				head1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "lightpink";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function reset() {
	colors = genRandColors(numSquares);
	pickColor = pickRandColor(); // pick a new random color from array 
	displayColor.textContent = pickColor; // change the color to be displayed as the pick color
	resetBut.textContent = "Reset colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display= "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display= "none";
		}
	}
	head1.style.backgroundColor = "lightblue";
}

resetBut.addEventListener("click", function() {
	reset();
});

// changes background color
function changeBackColor (color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color; // change each color to match given color
	}
}

// picks random colors 
function pickRandColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function genRandColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randColor());	// getting random color and pushing into array
	}
	return arr;
}

function randColor() {
	var r = Math.floor(Math.random() * 256); // pick random number from 0-255
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; // complete rgb, eg. (150, 100, 150)
}







