var sqr1A = "-";
var sqr1B = "-";
var sqr1C = "-";
var sqr1D = "-";
var sqr1E = "-";
var sqr1F = "-";
var sqr1G = "-";
var sqr1H = "-";

var sqr2A = "-";
var sqr2B = "-";
var sqr2C = "-";
var sqr2D = "-";
var sqr2E = "-";
var sqr2F = "-";
var sqr2G = "-";
var sqr2H = "-";

var sqr3A = "-";
var sqr3B = "-";
var sqr3C = "-";
var sqr3D = "-";
var sqr3E = "-";
var sqr3F = "-";
var sqr3G = "-";
var sqr3H = "-";

var sqr4A = "-";
var sqr4B = "-";
var sqr4C = "-";
var sqr4D = "-";
var sqr4E = "-";
var sqr4F = "-";
var sqr4G = "-";
var sqr4H = "-";

var sqr5A = "-";
var sqr5B = "-";
var sqr5C = "-";
var sqr5D = "-";
var sqr5E = "-";
var sqr5F = "-";
var sqr5G = "-";
var sqr5H = "-";

var sqr6A = "-";
var sqr6B = "-";
var sqr6C = "-";
var sqr6D = "-";
var sqr6E = "-";
var sqr6F = "-";
var sqr6G = "-";
var sqr6H = "-";

var sqr7A = "-";
var sqr7B = "-";
var sqr7C = "-";
var sqr7D = "-";
var sqr7E = "-";
var sqr7F = "-";
var sqr7G = "-";
var sqr7H = "-";

var sqr8A = "-";
var sqr8B = "-";
var sqr8C = "-";
var sqr8D = "-";
var sqr8E = "-";
var sqr8F = "-";
var sqr8G = "-";
var sqr8H = "-";

var column1 = false;
var column2 = false;
var column3 = false;
var column4 = false;
var column5 = false;
var column6 = false;
var column7 = false;
var column8 = false;

var rowA = false;
var rowB = false;
var rowC = false;
var rowD = false;
var rowE = false;
var rowF = false;
var rowG = false;
var rowH = false;

var diagonalBackslash1A = false;
var diagonalBackslash1B = false;
var diagonalBackslash1C = false;
var diagonalBackslash1D = false;
var diagonalBackslash1E = false;
var diagonalBackslash1F = false;
var diagonalBackslash1G = false;

var diagonalSlash1B = false;
var diagonalSlash1C = false;
var diagonalSlash1D = false;
var diagonalSlash1E = false;
var diagonalSlash1F = false;
var diagonalSlash1G = false;
var diagonalSlash1H = false;

var diagonalBackslash2A = false;
var diagonalBackslash3A = false;
var diagonalBackslash3A = false;
var diagonalBackslash4A = false;
var diagonalBackslash5A = false;
var diagonalBackslash6A = false;
var diagonalBackslash7A = false;

var diagonalSlash8B = false;
var diagonalSlash8C = false;
var diagonalSlash8D = false;
var diagonalSlash8E = false;
var diagonalSlash8F = false;
var diagonalSlash8G = false;

var run = function() {

  // COLUMN 1
  if (column1 === false && rowA === false && diagonalBackslash1A === false) {
    sqr1A = "Q";
    column1 = true;
    rowA = true;
    diagonalBackslash1A = true;
  }

  if (column1 === false && rowB === false && diagonalSlash1B === false && diagonalBackslash1B === false) {
    sqr1B = "Q";
    column1 = true;
    rowB = true;
    diagonalSlash1B = true;
    diagonalBackslash1B = true;
  }

  if (column1 === false && rowC === false && diagonalSlash1C === false && diagonalBackslash1C === false) {
    sqr1C = "Q";
    column1 = true;
    rowC = true;
    diagonalSlash1C = true;
    diagonalBackslash1C = true;
  }

  if (column1 === false && rowD === false && diagonalSlash1D === false && diagonalBackslash1D === false) {
    sqr1D = "Q";
    column1 = true;
    rowD = true;
    diagonalSlash1D = true;
    diagonalBackslash1D = true;
  }

  if (column1 === false && rowE === false && diagonalSlash1E === false && diagonalBackslash1E === false) {
    sqr1E = "Q";
    column1 = true;
    rowE = true;
    diagonalSlash1E = true;
    diagonalBackslash1E = true;
  }

  if (column1 === false && rowF === false && diagonalSlash1F === false && diagonalBackslash1F === false) {
    sqr1F = "Q";
    column1 = true;
    rowF = true;
    diagonalSlash1F = true;
    diagonalBackslash1F = true;
  }

  if (column1 === false && rowG === false && diagonalSlash1G === false && diagonalBackslash1G === false) {
    sqr1G = "Q";
    column1 = true;
    rowG = true;
    diagonalSlash1G = true;
    diagonalBackslash1G = true;
  }

  if (column1 === false && rowH === false && diagonalSlash1H === false) {
    sqr1H = "Q";
    column1 = true;
    rowH = true;
    diagonalSlash1H = true;
  }

  // COLUMN 2
  if (column2 === false && rowA === false && diagonalSlash1B === false && diagonalBackslash2A === false) {
    sqr2A = "Q";
    column2 = true;
    rowA = true;
    diagonalSlash1B = true;
    diagonalBackslash2A = true;
  }

  if (column2 === false && rowB === false && diagonalSlash1C === false && diagonalBackslash1A === false) {
    sqr2B = "Q";
    column2 = true;
    rowB = true;
    diagonalSlash1C = true;
    diagonalBackslash1A = true;
  }

  if (column2 === false && rowC === false && diagonalSlash1D === false && diagonalBackslash1B === false) {
    sqr2C = "Q";
    column2 = true;
    rowC = true;
    diagonalSlash1D = true;
    diagonalBackslash1B = true;
  }

  if (column2 === false && rowD === false && diagonalSlash1E === false && diagonalBackslash1C === false) {
    sqr2D = "Q";
    column2 = true;
    rowD = true;
    diagonalSlash1E = true;
    diagonalBackslash1C = true;
  }

  if (column2 === false && rowE === false && diagonalSlash1F === false && diagonalBackslash1D === false) {
    sqr2E = "Q";
    column2 = true;
    rowE = true;
    diagonalSlash1F = true;
    diagonalBackslash1D = true;
  }

  if (column2 === false && rowF === false && diagonalSlash1G === false && diagonalBackslash1E === false) {
    sqr2F = "Q";
    column2 = true;
    rowF = true;
    diagonalSlash1G = true;
    diagonalBackslash1E = true;
  }

  if (column2 === false && rowG === false && diagonalSlash1H === false && diagonalBackslash1F === false) {
    sqr2G = "Q";
    column2 = true;
    rowG = true;
    diagonalSlash1H = true;
    diagonalBackslash1F = true;
  }

  if (column2 === false && rowH === false && diagonalSlash8B === false && diagonalBackslash1G === false) {
    sqr2H = "Q";
    column2 = true;
    rowH = true;
    diagonalSlash8B = true;
    diagonalBackslash1G = true;
  }

  // COLUMN 3
  if (column3 === false && rowA === false && diagonalSlash1C === false && diagonalBackslash3A === false) {
    sqr3A = "Q";
    column3 = true;
    rowA = true;
    diagonalSlash1C = true;
    diagonalBackslash3A = true;
  }

  if (column3 === false && rowB === false && diagonalSlash1D === false && diagonalBackslash2A === false) {
    sqr3B = "Q";
    column3 = true;
    rowB = true;
    diagonalSlash1D = true;
    diagonalBackslash2A = true;
  }

  if (column3 === false && rowC === false && diagonalSlash1E === false && diagonalBackslash1A === false) {
    sqr3C = "Q";
    column3 = true;
    rowC = true;
    diagonalSlash1E = true;
    diagonalBackslash1A = true;
  }

  if (column3 === false && rowD === false && diagonalSlash1F === false && diagonalBackslash1B === false) {
    sqr3D = "Q";
    column3 = true;
    rowD = true;
    diagonalSlash1F = true;
    diagonalBackslash1B = true;
  }

  if (column3 === false && rowE === false && diagonalSlash1G === false && diagonalBackslash1C === false) {
    sqr3E = "Q";
    column3 = true;
    rowE = true;
    diagonalSlash1G = true;
    diagonalBackslash1C = true;
  }

  if (column3 === false && rowF === false && diagonalSlash8B === false && diagonalBackslash1D === false) {
    sqr3F = "Q";
    column3 = true;
    rowF = true;
    diagonalSlash8B = true;
    diagonalBackslash1D = true;
  }

  if (column3 === false && rowG === false && diagonalSlash8C === false && diagonalBackslash1E === false) {
    sqr3G = "Q";
    column3 = true;
    rowG = true;
    diagonalSlash8C = true;
    diagonalBackslash1E = true;
  }

  if (column3 === false && rowH === false && diagonalSlash8D === false && diagonalBackslash1F === false) {
    sqr3H = "Q";
    column3 = true;
    rowH = true;
    diagonalSlash8D = true;
    diagonalBackslash1F = true;
  }

  // COLUMN 4
  if (column4 === false && rowA === false && diagonalSlash1D === false && diagonalBackslash4A === false) {
    sqr4A = "Q";
    column4 = true;
    rowA = true;
    diagonalSlash1D = true;
    diagonalBackslash4A = true;
  }

  if (column4 === false && rowB === false && diagonalSlash1E === false && diagonalBackslash3A === false) {
    sqr4B = "Q";
    column4 = true;
    rowB = true;
    diagonalSlash1E = true;
    diagonalBackslash3A = true;
  }

  if (column4 === false && rowC === false && diagonalSlash1F === false && diagonalBackslash2A === false) {
    sqr4C = "Q";
    column4 = true;
    rowC = true;
    diagonalSlash1F = true;
    diagonalBackslash2A = true;
  }

  if (column4 === false && rowD === false && diagonalSlash1G === false && diagonalBackslash1A === false) {
    sqr4D = "Q";
    column4 = true;
    rowD = true;
    diagonalSlash1G = true;
    diagonalBackslash1A = true;
  }

  if (column4 === false && rowE === false && diagonalSlash1H === false && diagonalBackslash1B === false) {
    sqr4E = "Q";
    column4 = true;
    rowE = true;
    diagonalSlash1H = true;
    diagonalBackslash1B = true;
  }

  if (column4 === false && rowF === false && diagonalSlash8B === false && diagonalBackslash1C === false) {
    sqr4F = "Q";
    column4 = true;
    rowF = true;
    diagonalSlash8B = true;
    diagonalBackslash1C = true;
  }

  if (column4 === false && rowG === false && diagonalSlash8C === false && diagonalBackslash1D === false) {
    sqr4G = "Q";
    column4 = true;
    rowG = true;
    diagonalSlash8C = true;
    diagonalBackslash1D = true;
  }

  if (column4 === false && rowH === false && diagonalSlash8D === false && diagonalBackslash1E === false) {
    sqr4H = "Q";
    column4 = true;
    rowH = true;
    diagonalSlash8D = true;
    diagonalBackslash1E = true;
  }

  // COLUMN 5
  if (column5 === false && rowA === false && diagonalSlash1E === false && diagonalBackslash5A === false) {
    sqr5A = "Q";
    column5 = true;
    rowA = true;
    diagonalSlash1E = true;
    diagonalBackslash5A = true;
  }

  if (column5 === false && rowB === false && diagonalSlash1F === false && diagonalBackslash4A === false) {
    sqr5B = "Q";
    column5 = true;
    rowB = true;
    diagonalSlash1F = true;
    diagonalBackslash4A = true;
  }

  if (column5 === false && rowC === false && diagonalSlash1G === false && diagonalBackslash3A === false) {
    sqr5C = "Q";
    column5 = true;
    rowC = true;
    diagonalSlash1G = true;
    diagonalBackslash3A = true;
  }

  if (column5 === false && rowD === false && diagonalSlash1H === false && diagonalBackslash2A === false) {
    sqr5D = "Q";
    column5 = true;
    rowD = true;
    diagonalSlash1H = true;
    diagonalBackslash2A = true;
  }

  if (column5 === false && rowE === false && diagonalSlash8B === false && diagonalBackslash1A === false) {
    sqr5E = "Q";
    column5 = true;
    rowE = true;
    diagonalSlash8B = true;
    diagonalBackslash1A = true;
  }

  if (column5 === false && rowF === false && diagonalSlash8C === false && diagonalBackslash1B === false) {
    sqr5F = "Q";
    column5 = true;
    rowF = true;
    diagonalSlash8C = true;
    diagonalBackslash1B = true;
  }

  if (column5 === false && rowG === false && diagonalSlash8D === false && diagonalBackslash1C === false) {
    sqr5G = "Q";
    column5 = true;
    rowG = true;
    diagonalSlash8D = true;
    diagonalBackslash1C = true;
  }

  if (column5 === false && rowH === false && diagonalSlash8E === false && diagonalBackslash1D === false) {
    sqr5H = "Q";
    column5 = true;
    rowH = true;
    diagonalSlash8E = true;
    diagonalBackslash1D = true;
  }

  // COLUMN 6
  if (column6 === false && rowA === false && diagonalSlash1F === false && diagonalBackslash6A === false) {
    sqr6A = "Q";
    column6 = true;
    rowA = true;
    diagonalSlash1F = true;
    diagonalBackslash6A = true;
  }

  if (column6 === false && rowB === false && diagonalSlash1G === false && diagonalBackslash5A === false) {
    sqr6B = "Q";
    column6 = true;
    rowB = true;
    diagonalSlash1G = true;
    diagonalBackslash5A = true;
  }

  if (column6 === false && rowC === false && diagonalSlash1H === false && diagonalBackslash4A === false) {
    sqr6C = "Q";
    column6 = true;
    rowC = true;
    diagonalSlash1H = true;
    diagonalBackslash4A = true;
  }

  if (column6 === false && rowD === false && diagonalSlash8B === false && diagonalBackslash3A === false) {
    sqr6D = "Q";
    column6 = true;
    rowD = true;
    diagonalSlash8B = true;
    diagonalBackslash3A = true;
  }

  if (column6 === false && rowE === false && diagonalSlash8C === false && diagonalBackslash2A === false) {
    sqr6E = "Q";
    column6 = true;
    rowE = true;
    diagonalSlash8C = true;
    diagonalBackslash2A = true;
  }

  if (column6 === false && rowF === false && diagonalSlash8D === false && diagonalBackslash1A === false) {
    sqr6F = "Q";
    column6 = true;
    rowF = true;
    diagonalSlash8D = true;
    diagonalBackslash1A = true;
  }

  if (column6 === false && rowG === false && diagonalSlash8E === false && diagonalBackslash1B === false) {
    sqr6G = "Q";
    column6 = true;
    rowG = true;
    diagonalSlash8E = true;
    diagonalBackslash1B = true;
  }

  if (column6 === false && rowH === false && diagonalSlash8F === false && diagonalBackslash1C === false) {
    sqr6H = "Q";
    column6 = true;
    rowH = true;
    diagonalSlash8F = true;
    diagonalBackslash1C = true;
  }

  // COLUMN 7
  if (column7 === false && rowA === false && diagonalSlash1G === false && diagonalBackslash7A === false) {
    sqr7A = "Q";
    column7 = true;
    rowA = true;
    diagonalSlash1G = true;
    diagonalBackslash7A = true;
  }

  if (column7 === false && rowB === false && diagonalSlash1H === false && diagonalBackslash6A === false) {
    sqr7B = "Q";
    column7 = true;
    rowB = true;
    diagonalSlash1H = true;
    diagonalBackslash6A = true;
  }

  if (column7 === false && rowC === false && diagonalSlash8B === false && diagonalBackslash5A === false) {
    sqr7C = "Q";
    column7 = true;
    rowC = true;
    diagonalSlash8B = true;
    diagonalBackslash5A = true;
  }

  if (column7 === false && rowD === false && diagonalSlash8C === false && diagonalBackslash4A === false) {
    sqr7D = "Q";
    column7 = true;
    rowD = true;
    diagonalSlash8C = true;
    diagonalBackslash4A = true;
  }

  if (column7 === false && rowE === false && diagonalSlash8D === false && diagonalBackslash3A === false) {
    sqr7E = "Q";
    column7 = true;
    rowE = true;
    diagonalSlash8D = true;
    diagonalBackslash3A = true;
  }

  if (column7 === false && rowF === false && diagonalSlash8E === false && diagonalBackslash2A === false) {
    sqr7F = "Q";
    column7 = true;
    rowF = true;
    diagonalSlash8E = true;
    diagonalBackslash2A = true;
  }

  if (column7 === false && rowG === false && diagonalSlash8F === false && diagonalBackslash1A === false) {
    sqr7G = "Q";
    column7 = true;
    rowG = true;
    diagonalSlash8F = true;
    diagonalBackslash1A = true;
  }

  if (column7 === false && rowH === false && diagonalSlash8G === false && diagonalBackslash1B === false) {
    sqr7H = "Q";
    column7 = true;
    rowH = true;
    diagonalSlash8G = true;
    diagonalBackslash1B = true;
  }

  // COLUMN 8
  if (column8 === false && rowA === false && diagonalSlash1H === false) {
    sqr8A = "Q";
    column8 = true;
    rowA = true;
    diagonalSlash1H = true;
  }

  if (column8 === false && rowB === false && diagonalSlash8B === false && diagonalBackslash7A === false) {
    sqr8B = "Q";
    column8 = true;
    rowB = true;
    diagonalSlash8B = true;
    diagonalBackslash7A = true;
  }

  if (column8 === false && rowC === false && diagonalSlash8C === false && diagonalBackslash6A === false) {
    sqr8C = "Q";
    column8 = true;
    rowC = true;
    diagonalSlash8C = true;
    diagonalBackslash6A = true;
  }

  if (column8 === false && rowD === false && diagonalSlash8D === false && diagonalBackslash5A === false) {
    sqr8D = "Q";
    column8 = true;
    rowD = true;
    diagonalSlash8D = true;
    diagonalBackslash5A = true;
  }

  if (column8 === false && rowE === false && diagonalSlash8E === false && diagonalBackslash4A === false) {
    sqr8E = "Q";
    column8 = true;
    rowE = true;
    diagonalSlash8E = true;
    diagonalBackslash4A = true;
  }

  if (column8 === false && rowF === false && diagonalSlash8F === false && diagonalBackslash3A === false) {
    sqr8F = "Q";
    column8 = true;
    rowF = true;
    diagonalSlash8F = true;
    diagonalBackslash3A = true;
  }

  if (column8 === false && rowG === false && diagonalSlash8G === false && diagonalBackslash2A === false) {
    sqr8G = "Q";
    column8 = true;
    rowG = true;
    diagonalSlash8G = true;
    diagonalBackslash2A = true;
  }

  if (column8 === false && rowH === false && diagonalBackslash1A === false) {
    sqr8H = "Q";
    column8 = true;
    diagonalBackslash1A = true;
  }

};

run();

console.log(sqr1A + ' ' + sqr2A + ' ' + sqr3A + ' ' + sqr4A + ' ' + sqr5A + ' ' + sqr6A + ' ' + sqr7A + ' ' + sqr8A)
console.log(sqr1B + ' ' + sqr2B + ' ' + sqr3B + ' ' + sqr4B + ' ' + sqr5B + ' ' + sqr6B + ' ' + sqr7B + ' ' + sqr8B)
console.log(sqr1C + ' ' + sqr2C + ' ' + sqr3C + ' ' + sqr4C + ' ' + sqr5C + ' ' + sqr6C + ' ' + sqr7C + ' ' + sqr8C)
console.log(sqr1D + ' ' + sqr2D + ' ' + sqr3D + ' ' + sqr4D + ' ' + sqr5D + ' ' + sqr6D + ' ' + sqr7D + ' ' + sqr8D)
console.log(sqr1E + ' ' + sqr2E + ' ' + sqr3E + ' ' + sqr4E + ' ' + sqr5E + ' ' + sqr6E + ' ' + sqr7E + ' ' + sqr8E)
console.log(sqr1F + ' ' + sqr2F + ' ' + sqr3F + ' ' + sqr4F + ' ' + sqr5F + ' ' + sqr6F + ' ' + sqr7F + ' ' + sqr8F)
console.log(sqr1G + ' ' + sqr2G + ' ' + sqr3G + ' ' + sqr4G + ' ' + sqr5G + ' ' + sqr6G + ' ' + sqr7G + ' ' + sqr8G)
console.log(sqr1H + ' ' + sqr2H + ' ' + sqr3H + ' ' + sqr4H + ' ' + sqr5H + ' ' + sqr6H + ' ' + sqr7H + ' ' + sqr8H)
