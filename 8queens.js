var sqr1A = false;
var sqr1B = false;
var sqr1C = false;
var sqr1D = false;
var sqr1E = false;
var sqr1F = false;
var sqr1G = false;
var sqr1H = false;

var sqr2A = false;
var sqr2B = false;
var sqr2C = false;
var sqr2D = false;
var sqr2E = false;
var sqr2F = false;
var sqr2G = false;
var sqr2H = false;

var sqr3A = false;
var sqr3B = false;
var sqr3C = false;
var sqr3D = false;
var sqr3E = false;
var sqr3F = false;
var sqr3G = false;
var sqr3H = false;

var sqr4A = false;
var sqr4B = false;
var sqr4C = false;
var sqr4D = false;
var sqr4E = false;
var sqr4F = false;
var sqr4G = false;
var sqr4H = false;

var sqr5A = false;
var sqr5B = false;
var sqr5C = false;
var sqr5D = false;
var sqr5E = false;
var sqr5F = false;
var sqr5G = false;
var sqr5H = false;

var sqr6A = false;
var sqr6B = false;
var sqr6C = false;
var sqr6D = false;
var sqr6E = false;
var sqr6F = false;
var sqr6G = false;
var sqr6H = false;

var sqr7A = false;
var sqr7B = false;
var sqr7C = false;
var sqr7D = false;
var sqr7E = false;
var sqr7F = false;
var sqr7G = false;
var sqr7H = false;

var sqr8A = false;
var sqr8B = false;
var sqr8C = false;
var sqr8D = false;
var sqr8E = false;
var sqr8F = false;
var sqr8G = false;
var sqr8H = false;

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

var diagonalDOWN1A = false;
var diagonalDOWN1B = false;
var diagonalDOWN1C = false;
var diagonalDOWN1D = false;
var diagonalDOWN1E = false;
var diagonalDOWN1F = false;
var diagonalDOWN1G = false;

var diagonalUP1B = false;
var diagonalUP1C = false;
var diagonalUP1D = false;
var diagonalUP1E = false;
var diagonalUP1F = false;
var diagonalUP1G = false;
var diagonalUP1H = false;

var diagonalDOWN2A = false;
var diagonalDOWN3A = false;
var diagonalDOWN3A = false;
var diagonalDOWN4A = false;
var diagonalDOWN5A = false;
var diagonalDOWN6A = false;
var diagonalDOWN7A = false;

var diagonalUP8B = false;
var diagonalUP8C = false;
var diagonalUP8D = false;
var diagonalUP8E = false;
var diagonalUP8F = false;
var diagonalUP8G = false;

var run = function() {

  // COLUMN 1
  if (column1 === false && rowA === false && diagonalDOWN1A === false) {
    sqr1A = true;
    column1 = true;
    rowA = true;
    diagional1A = true;
  }
  else {
    sqr1A = false;
  }

  if (column1 === false && rowB === false && diagonalUP1B === false && diagonalDOWN1B === false) {
    sqr1B = true;
    column1 = true;
    rowB = true;
    diagonalUP1B = true;
    diagonalDOWN1B = true;
  }
  else {
    sqr1B = false;
  }

  if (column1 === false && rowC === false && diagonalUP1C === false && diagonalDOWN1C === false) {
    sqr1C = true;
    column1 = true;
    rowC = true;
    diagonalUP1C = true;
    diagonalDOWN1C = true;
  }
  else {
    sqr1C = false;
  }

  if (column1 === false && rowD === false && diagonalUP1D === false && diagonalDOWN1D === false) {
    sqr1D = true;
    column1 = true;
    rowD = true;
    diagonalUP1D = true;
    diagonalDOWN1D = true;
  }
  else {
    sqr1D = false;
  }

  if (column1 === false && rowE === false && diagonalUP1E === false && diagonalDOWN1E === false) {
    sqr1E = true;
    column1 = true;
    rowE = true;
    diagonalUP1E = true;
    diagonalDOWN1E = true;
  }
  else {
    sqr1E = false;
  }

  if (column1 === false && rowF === false && diagonalUP1F === false && diagonalDOWN1F === false) {
    sqr1F = true;
    column1 = true;
    rowF = true;
    diagonalUP1F = true;
    diagonalDOWN1F = true;
  }
  else {
    sqr1F = false;
  }

  if (column1 === false && rowG === false && diagonalUP1G === false && diagonalDOWN1G === false) {
    sqr1G = true;
    column1 = true;
    rowG = true;
    diagonalUP1G = true;
    diagonalDOWN1G = true;
  }
  else {
    sqr1G = false;
  }

  if (column1 === false && rowH === false && diagonalUP1H === false) {
    sqr1H = true;
    column1 = true;
    rowH = true;
    diagonalUP1H = true;
  }

  // COLUMN 2
  if (column2 === false && rowA === false && diagonalUP1B === false && diagonalDOWN2A === false) {
    sqr2A = true;
    column2 = true;
    rowA = true;
    diagonalUP1B = true;
    diagonalDOWN2A = true;
  }
  else {
    sqr2A = false;
  }

  if (column2 === false && rowB === false && diagonalUP1C === false && diagonalDOWN1A === false) {
    sqr2B = true;
    column2 = true;
    rowB = true;
    diagonalUP1C = true;
    diagonalDOWN1A = true;
  }
  else {
    sqr2B = false;
  }

  if (column2 === false && rowC === false && diagonalUP1D === false && diagonalDOWN1B === false) {
    sqr2C = true;
    column2 = true;
    rowC = true;
    diagonalUP1D = true;
    diagonalDOWN1B = true;
  }
  else {
    sqr2C = false;
  }

  if (column2 === false && rowD === false && diagonalUP1E === false && diagonalDOWN1C === false) {
    sqr2D = true;
    column2 = true;
    rowD = true;
    diagonalUP1E = true;
    diagonalDOWN1C = true;
  }
  else {
    sqr2D = false;
  }

  if (column2 === false && rowE === false && diagonalUP1F === false && diagonalDOWN1D === false) {
    sqr2E = true;
    column2 = true;
    rowE = true;
    diagonalUP1F = true;
    diagonalDOWN1D = true;
  }
  else {
    sqr2E = false;
  }

  if (column2 === false && rowF === false && diagonalUP1G === false && diagonalDOWN1E === false) {
    sqr2F = true;
    column2 = true;
    rowF = true;
    diagonalUP1G = true;
    diagonalDOWN1E = true;
  }
  else {
    sqr2F = false;
  }

  if (column2 === false && rowG === false && diagonalUP1H === false && diagonalDOWN1F === false) {
    sqr2G = true;
    column2 = true;
    rowG = true;
    diagonalUP1H = true;
    diagonalDOWN1F = true;
  }
  else {
    sqr2G = false;
  }

  if (column2 === false && rowH === false && diagonalUP8B === false && diagonalDOWN1G === false) {
    sqr2H = true;
    column2 = true;
    rowH = true;
    diagonalUP8B = true;
    diagonalDOWN1G = true;
  }

  // COLUMN 3
  if (column3 === false && rowA === false && diagonalUP1C === false && diagonalDOWN3A === false) {
    sqr3A = true;
    column3 = true;
    rowA = true;
    diagonalUP1C = true;
    diagonalDOWN3A = true;
  }

  if (column3 === false && rowB === false && diagonalUP1D === false && diagonalDOWN2A === false) {
    sqr3B = true;
    column3 = true;
    rowB = true;
    diagonalUP1D = true;
    diagonalDOWN2A = true;
  }

  if (column3 === false && rowC === false && diagonalUP1E === false && diagonalDOWN1A === false) {
    sqr3C = true;
    column3 = true;
    rowC = true;
    diagonalUP1E = true;
    diagonalDOWN1A = true;
  }

  if (column3 === false && rowD === false && diagonalUP1F === false && diagonalDOWN1B === false) {
    sqr3D = true;
    column3 = true;
    rowD = true;
    diagonalUP1F = true;
    diagonalDOWN1B = true;
  }

  if (column3 === false && rowE === false && diagonalUP1G === false && diagonalDOWN1C === false) {
    sqr3E = true;
    column3 = true;
    rowE = true;
    diagonalUP1G = true;
    diagonalDOWN1C = true;
  }

  if (column3 === false && rowF === false && diagonalUP8B === false && diagonalDOWN1D === false) {
    sqr3F = true;
    column3 = true;
    rowF = true;
    diagonalUP8B = true;
    diagonalDOWN1D = true;
  }

  if (column3 === false && rowG === false && diagonalUP8C === false && diagonalDOWN1E === false) {
    sqr3G = true;
    column3 = true;
    rowG = true;
    diagonalUP8C = true;
    diagonalDOWN1E = true;
  }

  if (column3 === false && rowH === false && diagonalUP8D === false && diagonalDOWN1F === false) {
    sqr3H = true;
    column3 = true;
    rowH = true;
    diagonalUP8D = true;
    diagonalDOWN1F = true;
  }

  // COLUMN 4
  if (column4 === false && rowA === false && diagonalUP1D === false && diagonalDOWN4A === false) {
    sqr4A = true;
    column4 = true;
    rowA = true;
    diagonalUP1D = true;
    diagonalDOWN4A = true;
  }

  if (column4 === false && rowB === false && diagonalUP1E === false && diagonalDOWN3A === false) {
    sqr4B = true;
    column4 = true;
    rowB = true;
    diagonalUP1E = true;
    diagonalDOWN3A = true;
  }

  if (column4 === false && rowC === false && diagonalUP1F === false && diagonalDOWN2A === false) {
    sqr4C = true;
    column4 = true;
    rowC = true;
    diagonalUP1F = true;
    diagonalDOWN2A = true;
  }

  if (column4 === false && rowD === false && diagonalUP1G === false && diagonalDOWN1A === false) {
    sqr4D = true;
    column4 = true;
    rowD = true;
    diagonalUP1G = true;
    diagonalDOWN1A = true;
  }

  if (column4 === false && rowE === false && diagonalUP1H === false && diagonalDOWN1B === false) {
    sqr4E = true;
    column4 = true;
    rowE = true;
    diagonalUP1H = true;
    diagonalDOWN1B = true;
  }

  if (column4 === false && rowF === false && diagonalUP8B === false && diagonalDOWN1C === false) {
    sqr4F = true;
    column4 = true;
    rowF = true;
    diagonalUP8B = true;
    diagonalDOWN1C = true;
  }

  if (column4 === false && rowG === false && diagonalUP8C === false && diagonalDOWN1D === false) {
    sqr4G = true;
    column4 = true;
    rowG = true;
    diagonalUP8C = true;
    diagonalDOWN1D = true;
  }

  if (column4 === false && rowH === false && diagonalUP8D === false && diagonalDOWN1E === false) {
    sqr4H = true;
    column4 = true;
    rowH = true;
    diagonalUP8D = true;
    diagonalDOWN1E = true;
  }

  // COLUMN 5
  if (column5 === false && rowA === false && diagonalUP1E === false && diagonalDOWN5A === false) {
    sqr5A = true;
    column5 = true;
    rowA = true;
    diagonalUP1E = true;
    diagonalDOWN5A = true;
  }

  if (column5 === false && rowB === false && diagonalUP1F === false && diagonalDOWN4A === false) {
    sqr5B = true;
    column5 = true;
    rowB = true;
    diagonalUP1F = true;
    diagonalDOWN4A = true;
  }

  if (column5 === false && rowC === false && diagonalUP1G === false && diagonalDOWN3A === false) {
    sqr5C = true;
    column5 = true;
    rowC = true;
    diagonalUP1G = true;
    diagonalDOWN3A = true;
  }

  if (column5 === false && rowD === false && diagonalUP1H === false && diagonalDOWN2A === false) {
    sqr5D = true;
    column5 = true;
    rowD = true;
    diagonalUP1H = true;
    diagonalDOWN2A = true;
  }

  if (column5 === false && rowE === false && diagonalUP8B === false && diagonalDOWN1A === false) {
    sqr5E = true;
    column5 = true;
    rowE = true;
    diagonalUP8B = true;
    diagonalDOWN1A = true;
  }

  if (column5 === false && rowF === false && diagonalUP8C === false && diagonalDOWN1B === false) {
    sqr5F = true;
    column5 = true;
    rowF = true;
    diagonalUP8C = true;
    diagonalDOWN1B = true;
  }

  if (column5 === false && rowG === false && diagonalUP8D === false && diagonalDOWN1C === false) {
    sqr5G = true;
    column5 = true;
    rowG = true;
    diagonalUP8D = true;
    diagonalDOWN1C = true;
  }

  if (column5 === false && rowH === false && diagonalUP8E === false && diagonalDOWN1D === false) {
    sqr5H = true;
    column5 = true;
    rowH = true;
    diagonalUP8E = true;
    diagonalDOWN1D = true;
  }

  // COLUMN 6
  if (column6 === false && rowA === false && diagonalUP1F === false && diagonalDOWN6A === false) {
    sqr6A = true;
    column6 = true;
    rowA = true;
    diagonalUP1F = true;
    diagonalDOWN6A = true;
  }

  if (column6 === false && rowB === false && diagonalUP1G === false && diagonalDOWN5A === false) {
    sqr6B = true;
    column6 = true;
    rowB = true;
    diagonalUP1G = true;
    diagonalDOWN5A = true;
  }

  if (column6 === false && rowC === false && diagonalUP1H === false && diagonalDOWN4A === false) {
    sqr6C = true;
    column6 = true;
    rowC = true;
    diagonalUP1H = true;
    diagonalDOWN4A = true;
  }

  if (column6 === false && rowD === false && diagonalUP8B === false && diagonalDOWN3A === false) {
    sqr6D = true;
    column6 = true;
    rowD = true;
    diagonalUP8B = true;
    diagonalDOWN3A = true;
  }

  if (column6 === false && rowE === false && diagonalUP8C === false && diagonalDOWN2A === false) {
    sqr6E = true;
    column6 = true;
    rowE = true;
    diagonalUP8C = true;
    diagonalDOWN2A = true;
  }

  if (column6 === false && rowF === false && diagonalUP8D === false && diagonalDOWN1A === false) {
    sqr6F = true;
    column6 = true;
    rowF = true;
    diagonalUP8D = true;
    diagonalDOWN1A = true;
  }

  if (column6 === false && rowG === false && diagonalUP8E === false && diagonalDOWN1B === false) {
    sqr6G = true;
    column6 = true;
    rowG = true;
    diagonalUP8E = true;
    diagonalDOWN1B = true;
  }

  if (column6 === false && rowH === false && diagonalUP8F === false && diagonalDOWN1C === false) {
    sqr6H = true;
    column6 = true;
    rowH = true;
    diagonalUP8F = true;
    diagonalDOWN1C = true;
  }

  // COLUMN 7
  if (column7 === false && rowA === false && diagonalUP1G === false && diagonalDOWN7A === false) {
    sqr7A = true;
    column7 = true;
    rowA = true;
    diagonalUP1G = true;
    diagonalDOWN7A = true;
  }

  if (column7 === false && rowB === false && diagonalUP1H === false && diagonalDOWN6A === false) {
    sqr7B = true;
    column7 = true;
    rowB = true;
    diagonalUP1H = true;
    diagonalDOWN6A = true;
  }

  if (column7 === false && rowC === false && diagonalUP8B === false && diagonalDOWN5A === false) {
    sqr7C = true;
    column7 = true;
    rowC = true;
    diagonalUP8B = true;
    diagonalDOWN5A = true;
  }

  if (column7 === false && rowD === false && diagonalUP8C === false && diagonalDOWN4A === false) {
    sqr7D = true;
    column7 = true;
    rowD = true;
    diagonalUP8C = true;
    diagonalDOWN4A = true;
  }

  if (column7 === false && rowE === false && diagonalUP8D === false && diagonalDOWN3A === false) {
    sqr7E = true;
    column7 = true;
    rowE = true;
    diagonalUP8D = true;
    diagonalDOWN3A = true;
  }

  if (column7 === false && rowF === false && diagonalUP8E === false && diagonalDOWN2A === false) {
    sqr7F = true;
    column7 = true;
    rowF = true;
    diagonalUP8E = true;
    diagonalDOWN2A = true;
  }

  if (column7 === false && rowG === false && diagonalUP8F === false && diagonalDOWN1A === false) {
    sqr7G = true;
    column7 = true;
    rowG = true;
    diagonalUP8F = true;
    diagonalDOWN1A = true;
  }

  if (column7 === false && rowH === false && diagonalUP8G === false && diagonalDOWN1B === false) {
    sqr7H = true;
    column7 = true;
    rowH = true;
    diagonalUP8G = true;
    diagonalDOWN1B = true;
  }

  // COLUMN 8
  if (column8 === false && rowA === false && diagonalUP1H === false) {
    sqr8A = true;
    column8 = true;
    rowA = true;
    diagonalUP1H = true;
  }

  if (column8 === false && rowB === false && diagonalUP8B === false && diagonalDOWN7A === false) {
    sqr8B = true;
    column8 = true;
    rowB = true;
    diagonalUP8B = true;
    diagonalDOWN7A = true;
  }

  if (column8 === false && rowC === false && diagonalUP8C === false && diagonalDOWN6A === false) {
    sqr8C = true;
    column8 = true;
    rowC = true;
    diagonalUP8C = true;
    diagonalDOWN6A = true;
  }

  if (column8 === false && rowD === false && diagonalUP8D === false && diagonalDOWN5A === false) {
    sqr8D = true;
    column8 = true;
    rowD = true;
    diagonalUP8D = true;
    diagonalDOWN5A = true;
  }

  if (column8 === false && rowE === false && diagonalUP8E === false && diagonalDOWN4A === false) {
    sqr8E = true;
    column8 = true;
    rowE = true;
    diagonalUP8E = true;
    diagonalDOWN4A = true;
  }

  if (column8 === false && rowF === false && diagonalUP8F === false && diagonalDOWN3A === false) {
    sqr8F = true;
    column8 = true;
    rowF = true;
    diagonalUP8F = true;
    diagonalDOWN3A = true;
  }

  if (column8 === false && rowG === false && diagonalUP8G === false && diagonalDOWN2A === false) {
    sqr8G = true;
    column8 = true;
    rowG = true;
    diagonalUP8G = true;
    diagonalDOWN2A = true;
  }

  if (column8 === false && rowH === false && diagonalDOWN1A === false) {
    sqr8H = true;
    column8 = true;
    diagonalDOWN1A = true;
  }

};

run();

console.log("Square 1A: " + sqr1A);
console.log("Square 1B: " + sqr1B);
console.log("Square 1C: " + sqr1C);
console.log("Square 1D: " + sqr1D);
console.log("Square 1E: " + sqr1E);
console.log("Square 1F: " + sqr1F);
console.log("Square 1G: " + sqr1G);
console.log("Square 1H: " + sqr1H);

console.log("Square 2A: " + sqr2A);
console.log("Square 2B: " + sqr2B);
console.log("Square 2C: " + sqr2C);
console.log("Square 2D: " + sqr2D);
console.log("Square 2E: " + sqr2E);
console.log("Square 2F: " + sqr2F);
console.log("Square 2G: " + sqr2G);
console.log("Square 2H: " + sqr2H);

console.log("Square 3A: " + sqr3A);
console.log("Square 3B: " + sqr3B);
console.log("Square 3C: " + sqr3C);
console.log("Square 3D: " + sqr3D);
console.log("Square 3E: " + sqr3E);
console.log("Square 3F: " + sqr3F);
console.log("Square 3G: " + sqr3G);
console.log("Square 3H: " + sqr3H);

console.log("Square 4A: " + sqr4A);
console.log("Square 4B: " + sqr4B);
console.log("Square 4C: " + sqr4C);
console.log("Square 4D: " + sqr4D);
console.log("Square 4E: " + sqr4E);
console.log("Square 4F: " + sqr4F);
console.log("Square 4G: " + sqr4G);
console.log("Square 4H: " + sqr4H);

console.log("Square 5A: " + sqr5A);
console.log("Square 5B: " + sqr5B);
console.log("Square 5C: " + sqr5C);
console.log("Square 5D: " + sqr5D);
console.log("Square 5E: " + sqr5E);
console.log("Square 5F: " + sqr5F);
console.log("Square 5G: " + sqr5G);
console.log("Square 5H: " + sqr5H);

console.log("Square 6A: " + sqr6A);
console.log("Square 6B: " + sqr6B);
console.log("Square 6C: " + sqr6C);
console.log("Square 6D: " + sqr6D);
console.log("Square 6E: " + sqr6E);
console.log("Square 6F: " + sqr6F);
console.log("Square 6G: " + sqr6G);
console.log("Square 6H: " + sqr6H);

console.log("Square 7A: " + sqr7A);
console.log("Square 7B: " + sqr7B);
console.log("Square 7C: " + sqr7C);
console.log("Square 7D: " + sqr7D);
console.log("Square 7E: " + sqr7E);
console.log("Square 7F: " + sqr7F);
console.log("Square 7G: " + sqr7G);
console.log("Square 7H: " + sqr7H);

console.log("Square 8A: " + sqr8A);
console.log("Square 8B: " + sqr8B);
console.log("Square 8C: " + sqr8C);
console.log("Square 8D: " + sqr8D);
console.log("Square 8E: " + sqr8E);
console.log("Square 8F: " + sqr8F);
console.log("Square 8G: " + sqr8G);
console.log("Square 8H: " + sqr8H);
