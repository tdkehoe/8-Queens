var chessboard = [[false, false, false, false, false, false, false, false], // chessboard[0] sqr0A, sqr1A, sqr2A
                  [false, false, false, false, false, false, false, false], // chessboard[1] sqr0B, sqr1B, sqr2B
                  [false, false, false, false, false, false, false, false], // chessboard[2] sqr0C, sqr1C, sqr2C
                  [false, false, false, false, false, false, false, false],
                  [false, false, false, false, false, false, false, false],
                  [false, false, false, false, false, false, false, false],
                  [false, false, false, false, false, false, false, false],
                  [false, false, false, false, false, false, false, false]
                 ];

var placeRook = function(chessboard) {
  chessboard.forEach(function(row) { // first loop: iterate through the eight rows of the chessboard
    for (var j = 0; j < 8; j++) { // second loop: iterate through the eight squares of each row looking for rooks
      for (var i = 0; i < 8; i++) { // third loop: iterate through the eight squares of each column looking for rooks
        var columnReduce = chessboard[j].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;}); // adds the values one row of the chessboard, 0 = no rooks (safe to place a rook), 1 = a rook (not safe to place a rook)
        if ( (columnReduce === 0) && (chessboard[0][i] === false) && (chessboard[1][i] === false) && (chessboard[2][i] === false) && (chessboard[3][i] === false) && (chessboard[4][i] === false) && (chessboard[5][i] === false) && (chessboard[6][i] === false)  && (chessboard[7][i] === false)) { // adds the values in one column of the chessboard
          chessboard[j][i] = true; // place a rook in a square
        };
      };
    };
  });
  return chessboard;
};

placeRook(chessboard);
console.log(chessboard);
