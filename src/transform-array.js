const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('not an Array!');
  }

  let transformArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next'){
      if (arr[i+2] === '--discard-prev' || arr[i+2] === '--double-prev') {
        i+=1;
      } 
      i+=1;        
    } else if (arr[i] === '--discard-prev') {
      transformArray.pop();
    } else if (arr[i] === '--double-next') {
        if (arr[i+1] !== undefined) {
          transformArray.push(arr[i + 1]);
        }
    } else if (arr[i] === '--double-prev') {
        if (transformArray.length > 0){
          transformArray.push(transformArray[transformArray.length - 1]);
        }
    } else if (arr[i] !== undefined) {
      transformArray.push(arr[i]);
    }
  }
  return transformArray;
};
