const CustomError = require("../extensions/custom-error");

module.exports =function transform(arr) {
  var res = []
  if (Array.isArray(arr)) {
    var len = arr.length
    var i = 0
    while (i < len) {
      switch (arr[i]) {
        case '--discard-next':
          i = i + 2
          break;
        case '--discard-prev':
          if (res.length !== 0 && arr[i-2]!=='--discard-next') {
            res.pop()
          }
          i++
          break;
        case '--double-next':
          if (i + 1 < len) {
            res.push(arr[i + 1])
          }
          i++
          break;
        case '--double-prev':
          if (i != 0 && arr[i-2]!='--discard-next') {
            res.push(arr[i - 1])
          }
          i++
          break;
        default:
          res.push(arr[i])
          i++
      }
    }
    return res
  }
  throw new CustomError('Not implemented');

};