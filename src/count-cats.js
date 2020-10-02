const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var count = 0
  matrix.forEach(row => {
    row.forEach(element => {
      if (element === '^^') {
        count += 1
      }
    });
  });
  return count
};