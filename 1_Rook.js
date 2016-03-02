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
