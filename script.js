var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

console.log(css);
console.log(color1);
console.log(color2);

/**
 * this function generates 2 random hexamedimal strings and then sets color1 and color2 respectively to equal these number
 * it then called the setGradient() function to display the random color results
 * no paramters
 * return
 * */
function randomColorGenerator(){
	let n = (Math.random() *  0xfffff * 1000000).toString(16);
	let m = (Math.random() *  0xfffff * 1000000).toString(16);
	colors = ['#' + n.slice(0,6), '#' + m.slice(0,6)];
	color1.value = colors[0];
	color2.value = colors[1];

	setGradient();
}

/*
* this function sets the gradient color for the background with color panel as in put
* no parameters
* no return
**/
function setGradient(){
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

randomColorGenerator();

button.addEventListener("click", randomColorGenerator);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


css.textContent = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
