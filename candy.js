// this file should contain the code needed to generate the candy

var candy = function(){
	this.candy = true;
	this.report = function(){
		console.log(this.color);
	}
}
var Pink = function(type, style){
	this.color = "pink";
	this.type = type;
	this.style = style;
};
Pink.protoype = new candy();
var pink = new Pink('normal', 'round');

// var Green = function(type, style)

var Green = function(type, style){
	this.color = "green";
	this.type = type;
	this.style = style;
};
Green.protoype = new candy();
var green = new Green('normal',  'round');

var Yellow = function(type, style){
	this.color = "yellow";
	this.type = type;
	this.style = style;
};
Yellow.protoype = new candy();
var yellow = new Yellow('normal',  'round');

// var candy = function(){
// 	this.candy = true;
// }

// candy.protoype.idByColor = function(name){
// 	return this.color;
// }

var Blue = function(type, style){
	this.color = "blue";
	this.type = type;
	this.style = style;
};
Blue.protoype = new candy();
var blue = new Blue('normal',  'round');

// because nievie always needs a randomizer... always. 

candy_random = function(){
	var candies = [green, blue, pink, yellow];
	var candie = candies[Math.floor(Math.random()*candies.length)];
	return candie;
}

// test to make sure I know how to hook up the js to the html

placeRandomCandyInHtml = function(){
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

// didn't want to get stuck down a prototyping rabbit hole, but wanted to leave the constructor function here for future implementation

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

var starterGrid = makeGrid();

// revision to the above function placeRandomCandyInHtml(), now takes a candy object as it's argument for improved flexibility
convertCandyToHtml = function(candy){
	var candy_span = document.createElement('button');
	var new_candy = candy;
	candy_span.className = new_candy.color;
	candy_span.style.color = new_candy.color;
	document.body.appendChild(candy_span);
}

//now we can convert the entire starterGrid all at once

convertGridToHtml = function(grid){
	var foundCandy = {};
	for (var i = 0; i < grid.length; i++) {
		for ( var j = 0; j < grid[i].length; j++ ) { 
			var foundCandy = grid[i][j];
			convertCandyToHtml(foundCandy);
    };
	};
};

// made some html variables for testing 

var land = document.getElementsByClassName('land');
var candyLand = document.createElement('div');

// notes on where to go next:
// need helper fn with starting spot and a direction, tells you how far you can go 
// i compared to i of back forward and samsies of i for all rows

finder = function(array){
	for (var i = 0; i <array.length; i++) {
		// do a check function
		// record output
	};
}

grid_search = function (grid, starting_point){

}

row_search = function (grid,  starting){

}

//check array again array 

check = function(grid){
	var grid = grid;
	for (var i = 0; i <grid.length; i++) {
	grid[i]
	};
	return grid[i];
}

// take the first array and compare it to the second array to look for a match per index 
// how do I check to see what is in an index? Array[i] returns what ever is in Array at [i] index. 
// so I want to compare 
// for Array x if content of Array x [i] = content of Array y [i] console log pair. ( flag a pair? probably 
// best to have it return me a matrix.... right? 

// for (var i = 0; i < grid.length; i++) {
// 	if (grid[0][0] === grid[1])
// };

a = ['blue','pink','yellow','red','blue','blue','blue','red'];
match_color='';
match_start=-1;
match_end=-1;

var search = function(){
	for (var i = 0; i < a.length; i++) {
		if (match_color == "") {
		match_color = a[i];
		match_start = i;
		}
	else if (a[i]==match_color) {
		match_end = i;
		}
	else if ( match_color!=a[i] ) {
		match_start = i;
		match_end = -1;
		match_color = a[i];
		} 

	if ( (match_end - match_start) >= 2 && (match_color==a[i])) {
		console.log("Match found: "+ "Color: " + match_color + " position: " +match_start + " " +match_end);
		}
	}
	
}

