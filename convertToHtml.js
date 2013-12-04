

// test to make sure I know how to hook up the js to the html

placeRandomCandyInHtml = function(){
  var candy_span = document.createElement('button');
  var new_candy = candy_random();
  candy_span.className = new_candy.color;
  candy_span.style.color = new_candy.color;
  document.body.appendChild(candy_span);
}
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
