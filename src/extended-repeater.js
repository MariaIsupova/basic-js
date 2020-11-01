const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  var repeat = options.repeatTimes
  if (options.separator) {
    var sep = options.separator
  } else {
    var sep = '+'
  }
  if (options.addition!==undefined) {
    var add = String(options.addition)
  } else {
    var add = ''
  }
  if (options.additionRepeatTimes) {
    var repeatAdd = options.additionRepeatTimes
  } else {
    var repeatAdd = 0
  }
  if (options.additionSeparator) {
    var addSep = options.additionSeparator
  } else {
    var addSep = '|'
  }

  var res = ''
  for (i = 1; i < repeat; i++) {
    res += str
    // console.log(res)
    for (j = 1; j < repeatAdd; j++) {
      res += add + addSep
    }
    res += add + sep
  }
  res += str
  for (j = 1; j < repeatAdd; j++) {
    res += add + addSep
  }
  res += add
  // console.log(res)
  return res
};


// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })

// repeater('my test string', { repeatTimes: 5, separator: '?!', addition: 'PLUS', additionRepeatTimes: 4, additionSeparator: '))' })
