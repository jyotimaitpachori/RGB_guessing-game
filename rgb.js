var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var rgb = document.getElementById("rgb");
var reset = document.querySelector("#reset");
var message = document.getElementById("message");
var modeBtns = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init(){
	setModeBtns();
	resetGame();
	setSquares();
}

function setModeBtns(){
	for(var i = 0; i < modeBtns.length; i++){
	    modeBtns[i].addEventListener("click", function(){
		    modeBtns[0].classList.remove("selected");
		    modeBtns[1].classList.remove("selected");
		    this.classList.add("selected");
		    this.textContent === "EASY" ? numSquares = 3: numSquares = 6
		    resetGame();
	    });
    }
}

function resetGame(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick all random colors
	pickedColor = pickColor();
	//change rgb to match pickedColor
	rgb.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		    squares[i].style.display = "block";
		    squares[i].style.backgroundColor = colors[i];
		}else{
		    squares[i].style.display = "none";
		    //squares[i].style.backgroundColor = "#232323";
		}
	}
	//change h1 background to original color
	h1.style.backgroundColor = "steelblue"; 
	//text should be new colors
	reset.textContent = "NEW COLORS";
	//message should be blank
	message.textContent = " ";
}

reset.addEventListener("click", function(){
	resetGame();
});

function setSquares(){
	for(var i = 0; i < squares.length; i++){
	    // add initial colors to squares
	    squares[i].style.backgroundColor = colors[i];

	    // add event listeners to the squares
	    squares[i].addEventListener("click", function(){
		    // grab color of pickedColor
		    var clickedColor = this.style.backgroundColor;

		    // compare color to pickedColor 
		    if(clickedColor === pickedColor){
			    for(var i = 0; i < squares.length; i++){
				    squares[i].style.backgroundColor = pickedColor;
			    }
			    h1.style.backgroundColor = pickedColor;
		        message.textContent = "CORRECT!";
		        //reset text should be play again
		        reset.textContent = "PLAY AGAIN!";
		    }else{
			    this.style.backgroundColor = "#232323" ;
			    message.textContent = "WRONG!! TRY AGAIN!";
		    }
	    });
    }

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];

	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return the array
	return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // spaces after , are very important
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
