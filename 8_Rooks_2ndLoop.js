var columnRow = [ [false, false, false, false, false, false, false, false], // columnRow[0] sqr0A, sqr1A, sqr2A
[false, false, false, false, false, false, false, false], // columnRow[1] sqr0B, sqr1B, sqr2B
[false, false, false, false, false, false, false, false], // columnRow[2] sqr0C, sqr1C, sqr2C
[false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false]
];

console.log(columnRow[0]); // sqr1A, sqr2A, sqr3A
console.log(columnRow[1]); // sqr1B, sqr2B, sqr3B

console.log(columnRow[0][0]); // sqr1A
console.log(columnRow[1][0]); // sqr1B
console.log(columnRow[0][1]); // sqr2A
console.log(columnRow[1][1]); // sqr2B

var placeRook = function(columnRow) {
  columnRow.forEach(function(square) {

    // Row 0
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[0].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[i][0] = true; // places first rook in sqr0A
      };
    };

    // Row 1
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[1].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[1][i] = true;  // places second rook in sqr1B
      };
    };

    // Row 2
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[2].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[2][i] = true;  // places third rook in sqr2C
      };
    };

    // Row 3
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[3].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[3][i] = true;  // places fourth rook in sqr3D
      };
    };

    // Row 4
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[4].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[4][i] = true;  // places fifth rook in sqr4E
      };
    };

    // Row 5
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[5].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[5][i] = true;
      };
    };

    // Row 6
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[6].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ) {
        columnRow[6][i] = true;
      };
    };

    // Row 7
    for (var i = 0; i < 8; i++) {
      var columnReduce = columnRow[7].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) && (columnRow[1][i] + columnRow[1][i] === 0) && (columnRow[2][i] + columnRow[2][i] === 0) && (columnRow[3][i] + columnRow[3][i] === 0) && (columnRow[4][i] + columnRow[4][i] === 0) && (columnRow[5][i] + columnRow[5][i] === 0) && (columnRow[6][i] + columnRow[6][i] === 0) ){
        columnRow[7][i] = true;
      };
    };

  });
  return columnRow;
};

placeRook(columnRow);
console.log(columnRow);
