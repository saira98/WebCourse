// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// 	]

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
for (var i =0; i < squares.length; i++)
{
	// add initial color to squares
	squares[i].style.background =colors[i];
    
    // add click listeners to square
    squares[i].addEventListener("click", function(){
    	//grab color of clicked square
    	var clickedColor = this.style.background;
    	//compare color to pickedcolor
    	if (clickedColor === pickedColor)
    	{
    		messageDisplay.textContent = "Correct";
    		changeColors(clickedColor);
    		h1.style.background = clickedColor;
    		}
    	else 
    	{
    		// 
    		this.style.background = "#232323";
    		messageDisplay.textContent = "Try again";
    	}
    });
}

function changeColors(color){
	//loop through all squares 
	for (var i =0; i< squares.length; i++)
	{
		squares[i].style.background = color;
	}
	//change each color to match given color
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num)
{
 	//make an array
 	var arr = []
 	//repeat num times
 	for (var i =0 ;i < num; i++)
 	  {
 		// add num random colors and push into array
 	  	arr.push(randomColor());
 	  }
 	//return that array
 	return arr;
}

function randomColor()
{
	//pick a "red" from 0-255
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r +"," + g + ","+ b + ")";
}