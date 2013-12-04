// this file should contain the code needed to generate the candy

var candy = function(){
	this.candy = true;
	this.break = function(){};
	this.score = function(){};
	this.sayHi = function(){
		console.log('hi');
	};

}

candy.prototype.report = function(){
	console.log(this.color);
};

var Pink = function(type, style){
	this.color = "pink";
	this.type = type;
	this.style = style;
};
Pink.prototype = new candy();
var pink = new Pink('normal', 'round');

// var Green = function(type, style)

var Green = function(type, style){
	this.color = "green";
	this.type = type;
	this.style = style;
};
Green.prototype = new candy();
var green = new Green('normal',  'round');

var Yellow = function(type, style){
	this.color = "yellow";
	this.type = type;
	this.style = style;
};
Yellow.prototype = new candy();
var yellow = new Yellow('normal',  'round');

// var candy = function(){
// 	this.candy = true;
// }

// candy.prototype.idByColor = function(name){
// 	return this.color;
// }

var Blue = function(type, style){
	this.color = "blue";
	this.type = type;
	this.style = style;
};
Blue.prototype = new candy();
var blue = new Blue('normal',  'round');

// because nievie always needs a randomizer... always. 

candy_random = function(){
	var candies = [green, blue, pink, yellow];
	var candie = candies[Math.floor(Math.random()*candies.length)];
	return candie;
}


// take the first array and compare it to the second array to look for a match per index 
// how do I check to see what is in an index? Array[i] returns what ever is in Array at [i] index. 
// so I want to compare 
// for Array x if content of Array x [i] = content of Array y [i] console log pair. ( flag a pair? probably 
// best to have it return me a matrix.... right? 


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

