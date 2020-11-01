const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (arr instanceof Array) {
      depth++;
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        let deep = this.calculateDepth(arr[i]);
        if (deep > count) {
          count = deep;
        }
      }
      depth += count;
    }
    return depth;
  }
};