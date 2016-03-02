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
  chessboard.forEach(function(square) {
    for (var j = 0; j < 8; j++) {
      for (var i = 0; i < 8; i++) {
        var columnReduce = chessboard[j].reduce(function(previousValue, currentValue, currentIndex, array) {return previousValue + currentValue;});
        if ( (columnReduce === 0) && (chessboard[0][i] + chessboard[0][i] === 0) && (chessboard[1][i] + chessboard[1][i] === 0) && (chessboard[2][i] + chessboard[2][i] === 0) && (chessboard[3][i] + chessboard[3][i] === 0) && (chessboard[4][i] + chessboard[4][i] === 0) && (chessboard[5][i] + chessboard[5][i] === 0) && (chessboard[6][i] + chessboard[6][i] === 0) ) {
          chessboard[j][i] = true;
        };
      };
    };
  });
  return chessboard;
};

placeRook(chessboard);
console.log(chessboard);
