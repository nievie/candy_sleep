// this code should calculate the position of the candies and 'crush' those that meet the matching criteria. 
matcher = function(row){
  for (var i = 0; i < this.length; i++) {
    console.log(i + " " + this[i].color.valueOf());

    if (i<this.length-1 && this[i].color.valueOf() === this[i+1].color.valueOf()) {
      this[i].match = true;
    }
  };
}

// test = function(){
//   for (var i = 0; i < nie.length; i++) {
//     console.log(i + " " + nie[i].color.valueOf());

//     if (nie[i+1]<nie.length && nie[i].color.valueOf() === nie[i+1].color.valueOf()) {
//       nie[i].match = true;
//     }
//   };
// }

// var n = makeRow();
// var nie = [pink, pink, green, green, green, blue, yellow, pink, pink];


// test = function(){
//   for (var i = 0; i < nie.length; i++) {
//     console.log(i + " " + nie[i].color.valueOf());

//     if (nie[i+1]<nie.length && nie[i].color.valueOf() === nie[i+1].color.valueOf()) {
//       nie[i].match = true;
//     }
//   };
// }




var n = makeRow();
var nie = [pink, pink, green, green, green, blue, yellow, pink, pink];

