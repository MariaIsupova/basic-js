const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  var turns_ = Math.pow(2,disksNumber)-1
  var turnsSpeedTurnsInSecond =turnsSpeed/3600
  let result = {     
    turns:  turns_,
    seconds: Math.floor(turns_/turnsSpeedTurnsInSecond)      
  };
  return result
};