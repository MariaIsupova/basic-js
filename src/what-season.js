const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(checkDate) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }
  if(typeof checkDate.getTime() != 'number'){
    throw new CustomError('Not implemented');
  }
  if (typeof checkDate.getMonth === 'function') {
    // console.log('+')
    var month = checkDate.getMonth()
    // console.log(month)
    if (month === 0 || month === 1 || month === 11) {
      return 'winter'
    } else if (month === 2 || month === 3 || month === 4) {
      return 'spring'
    } else if (month === 5 || month === 6 || month === 7) {
      return 'summer'
    } else {
      return 'autumn'
    }
  } else {
    // console.log('-')
    throw new CustomError('Not implemented');
  }
};