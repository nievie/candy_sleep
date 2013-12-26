// this is where the grid will be built and populated
matcher = function(row){
  for (var i = 0; i < row.length; i++) {
    console.log(i + " " + row[i].color.valueOf());

    if (i<row.length-1 && row[i].color.valueOf() === row[i+1].color.valueOf()) {
      row[i].match = true;
    }
  };
}

makeRow = function(){
  var row = [];
    while (row.length < 9){
      row.push(candy_random());
    }
    matcher(row);
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

