var columnRow = [[false, false],  [false, false],  [false, false],  [false, false], [false, false],  [false, false],  [false, false],  [false, false]];
console.log(column);

var placeRook = function(columnRow) {
  columnRow.forEach(function(square) {
    for (var i = 0; i < columnRow.length; i++) {
      var columnReduce = columnRow[0].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
      console.log(columnReduce);
      if (columnReduce === 0) {
        columnRow[i][0] = true
      }
    }
  });
  return columnRow;
};

placeRook(columnRow);
console.log(columnRow);
