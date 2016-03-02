var sqr11 = "-";
var sqr12 = "-";
var sqr13 = "-";
var sqr14 = "-";
var sqr15 = "-";
var sqr16 = "-";
var sqr17 = "-";
var sqr18 = "-";

var sqr21 = "-";
var sqr22 = "-";
var sqr23 = "-";
var sqr24 = "-";
var sqr25 = "-";
var sqr26 = "-";
var sqr27 = "-";
var sqr28 = "-";

var sqr31 = "-";
var sqr32 = "-";
var sqr33 = "-";
var sqr34 = "-";
var sqr35 = "-";
var sqr36 = "-";
var sqr37 = "-";
var sqr38 = "-";

var sqr41 = "-";
var sqr42 = "-";
var sqr43 = "-";
var sqr44 = "-";
var sqr45 = "-";
var sqr46 = "-";
var sqr47 = "-";
var sqr48 = "-";

var sqr51 = "-";
var sqr52 = "-";
var sqr53 = "-";
var sqr54 = "-";
var sqr55 = "-";
var sqr56 = "-";
var sqr57 = "-";
var sqr58 = "-";

var sqr61 = "-";
var sqr62 = "-";
var sqr63 = "-";
var sqr64 = "-";
var sqr65 = "-";
var sqr66 = "-";
var sqr67 = "-";
var sqr68 = "-";

var sqr71 = "-";
var sqr72 = "-";
var sqr73 = "-";
var sqr74 = "-";
var sqr75 = "-";
var sqr76 = "-";
var sqr77 = "-";
var sqr78 = "-";

var sqr81 = "-";
var sqr82 = "-";
var sqr83 = "-";
var sqr84 = "-";
var sqr85 = "-";
var sqr86 = "-";
var sqr87 = "-";
var sqr88 = "-";

var column1 = 0;
var column2 = 0;
var column3 = 0;
var column4 = 0;
var column5 = 0;
var column6 = 0;
var column7 = 0;
var column8 = 0;

var row1 = 0;
var row2 = 0;
var row3 = 0;
var row4 = 0;
var row5 = 0;
var row6 = 0;
var row7 = 0;
var row8 = 0;



for (var c = 1; c <= 8; c++) {
  for (var r = 1; r <= 8; r++) {
    console.log('sqr' + c + r);
  };
}


var run = function() {
  for (var c = 0; c <= 8; c++) {
    if (('column' + c) === 0 && (row1 === 0)) {
      'sqr' + c + '1' = "R"; // incorrect, 'sqr11' = "R", should be sqr11 = "R"
      'column' + c = true;
      row1 = true;
    };
  };
};

var sqr1A = {
  column: 1,
  row: 1,
  value: "-"
}

var run = function() {
  for (var c = 0; c <= 8; c++) {
    if (('column' + c) === 0 && (row1 === 0)) {
      'sqr' + c + '1' = "R"; // incorrect, 'sqr11' = "R", should be sqr11 = "R"
      'column' + c = true;
      row1 = true;
    };
  };
};



var run = function() {
  for (var c = 0; c <= 8; c++) {
    for (var r = 0; r <= 8; r++) {
      if (('column' + c) === false && ('row' + r) === false) {
        'sqr' + c + r = "R"; // incorrect, 'sqr2' = "R", should be sqr11 = "R"
        'column' + c = true; // incorrect, 'column1' = true, should be column1 = true
        'row' + r = true; // incorrect, 'row1' = true, should be row1 = true
      };
    };
  };
};

run();

console.log(sqr11 + ' ' + sqr21 + ' ' + sqr31 + ' ' + sqr41 + ' ' + sqr51 + ' ' + sqr61 + ' ' + sqr71 + ' ' + sqr81)
console.log(sqr12 + ' ' + sqr22 + ' ' + sqr32 + ' ' + sqr42 + ' ' + sqr52 + ' ' + sqr62 + ' ' + sqr72 + ' ' + sqr82)
console.log(sqr13 + ' ' + sqr23 + ' ' + sqr33 + ' ' + sqr43 + ' ' + sqr53 + ' ' + sqr63 + ' ' + sqr73 + ' ' + sqr83)
console.log(sqr14 + ' ' + sqr24 + ' ' + sqr34 + ' ' + sqr44 + ' ' + sqr54 + ' ' + sqr64 + ' ' + sqr74 + ' ' + sqr84)
console.log(sqr15 + ' ' + sqr25 + ' ' + sqr35 + ' ' + sqr45 + ' ' + sqr55 + ' ' + sqr65 + ' ' + sqr75 + ' ' + sqr85)
console.log(sqr16 + ' ' + sqr26 + ' ' + sqr36 + ' ' + sqr46 + ' ' + sqr56 + ' ' + sqr66 + ' ' + sqr76 + ' ' + sqr86)
console.log(sqr17 + ' ' + sqr27 + ' ' + sqr37 + ' ' + sqr47 + ' ' + sqr57 + ' ' + sqr67 + ' ' + sqr77 + ' ' + sqr87)
console.log(sqr18 + ' ' + sqr28 + ' ' + sqr38 + ' ' + sqr48 + ' ' + sqr58 + ' ' + sqr68 + ' ' + sqr78 + ' ' + sqr88)






var column = [false,  false,  false,  false, false,  false,  false,  false];
console.log(column);

var placeRook = function(column) {
  column.forEach(function(square) {
    for (var i = 0; i < column.length; i++) {
      var columnReduce = column.reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      console.log(columnReduce);
      if (columnReduce === 0) {
        column[i] = true
      }
    }
  });
  return column;
};

placeRook(column);
console.log(column);
