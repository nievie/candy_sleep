// this is where the grid will be built and populated

makeRow = function(){
  var row = [];
    while (row.length < 9){
      row.push(candy_random());
    }
  return row;
}

makeGrid = function(){
  var grid = []
  for (var i = 0; i < 9; i++) {
    grid.push(makeRow());
  };
  return grid;
}

var starterGrid = makeGrid();