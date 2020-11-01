const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  // calculateDepth(/* arr */) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // }

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return 1 + Math.max(0, ...arr.map(this.calculateDepth))
    } else{
      return 0
    } 
  }

};