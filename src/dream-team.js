const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false

  let dreamTeamName = ''
  members.forEach(element => {
    if(typeof element === 'string'){
      element = element.split(" ").join("")
      dreamTeamName += element[0].toUpperCase()
    }
  });
  return dreamTeamName.split('').sort().join('')
};

