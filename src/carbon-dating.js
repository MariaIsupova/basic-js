const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var isnum = /^\d+$/.test(sampleActivity)
  if (typeof sampleActivity !== "string" || !isnum  || parseInt(sampleActivity)<=0 || parseInt(sampleActivity)>8999) {
    return false
  }

  var t
  t = (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693
  return Math.ceil(t)

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};