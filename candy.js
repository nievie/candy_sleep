// this file should contain the code needed to generate the candy

var candy = function(type, color, style){
	this.type = type;
	this.color = color;
	this.style = style;
}

var green = new candy("normal", 'green', 'round');
var blue = new candy("normal", 'blue', 'round');
var pink = new candy("normal", 'pink', 'round');
var yellow = new candy("normal", 'yellow', 'round');

candy_random = function(){
	var candies = [green, blue, pink, yellow];
	var candie = candies[Math.floor(Math.random()*candies.length)];
	return candie;
}

makeCandy = function(){
	var candy_span = document.createElement('button');
	var new_candy = candy_random();
	candy_span.className = new_candy.color;
	candy_span.style.color = new_candy.color;
	document.body.appendChild(candy_span);
}

checkForLock = function(){
  // function should check to make sure any match is possible;  
}

checkForMatch = function(){
  //function should check the grid to see if there is a match;
}


removeCandy = function(){

}