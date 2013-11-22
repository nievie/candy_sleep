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

placeRandomCandy = function(){
	var candy_span = document.createElement('button');
	var new_candy = candy_random();
	candy_span.className = new_candy.color;
	candy_span.style.color = new_candy.color;
	document.body.appendChild(candy_span);
}


// this is where the grid will be built and populated

makeRow = function(){
	var row = [];
		while (row.length < 9){
			row.push(candy_random());
		}
	return row;
}

// var row = function(){
// 	var r = makeRow();
// 	return r;
// }

makeGrid = function(){
	var grid = []
	for (var i = 0; i < 9; i++) {
		grid.push(makeRow());
	};
	return grid;
}

convertCandyToHtml = function(candy){
	var candy_span = document.createElement('button');
	var new_candy = candy;
	candy_span.className = new_candy.color;
	candy_span.style.color = new_candy.color;
	document.body.appendChild(candy_span);
}


convertGridToHtml = function(grid){
	var foundCandy = {};
	for (var i = 0; i < grid.length; i++) {
		for ( var j = 0; j < grid[i].length; j++ ) { 
			var foundCandy = grid[i][j];
			convertCandyToHtml(foundCandy);
    };
	};
};


var starterGrid = makeGrid();
var land = document.getElementsByClassName('land');
var candyLand = document.createElement('div');

// helper with starting spot and a direction, tells you how far you can go 

//i compared to i of back forward and samsies of i for all rows






// var row_one = [candy_random(), candy_random(), candy_random(), candy_random()]