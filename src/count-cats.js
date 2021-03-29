const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catEars = 0 ;
  let splMatrix ;
  splMatrix =matrix.toString().split(',');
  for(let i = 0 ; i <= splMatrix.length ; i++  ) {
    if (splMatrix[i] === '^^'){
      catEars +=1;
    }
  };
  return catEars;
};
