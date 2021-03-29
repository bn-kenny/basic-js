const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members == undefined) return false;
    let nameTeam = [];
    for(let i = 0; i < members.length; i++) {
        if(typeof(members[i]) == "string") {
            for(let j = 0; j < members[i].length; j++) {
                if(members[i][j] != " ") {
                  nameTeam.push(members[i][j].toUpperCase());
                    break;
                }
            }
        }
    }
    if(nameTeam.length === 0) return false;
    nameTeam.sort();
    return nameTeam.join("");
};
