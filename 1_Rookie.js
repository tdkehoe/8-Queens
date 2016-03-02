var columnRow = [ [false, false],  // sqr1A, sqr2A
                  [false, false],  // sqr1B, sqr2B
                  [false, false],
                  [false, false],
                  [false, false],
                  [false, false],
                  [false, false],
                  [false, false]];
console.log(columnRow);

var placeRook = function(columnRow) {
  columnRow.forEach(function(square) {
    // Column 1
    for (var i = 0; i < columnRow.length; i++) {
      var columnReduce = columnRow[0].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      console.log(columnReduce);
      if (columnReduce === 0) {
        columnRow[i][0] = true;
      };
    };
    // Column 2
    for (var i = 0; i < columnRow.length; i++) {
      var columnReduce = columnRow[0][0].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      console.log(columnReduce);
      if ( (columnReduce === 0) && (columnRow[0][i] + columnRow[0][i] === 0) ){ // sqr1A + sqr2A === 0
        columnRow[0][i] = true;
      };
    };
  });
  return columnRow;
};

placeRook(columnRow);
console.log(columnRow);
