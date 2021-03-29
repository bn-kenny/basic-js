const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    let nextArr = 1;

    arr.forEach( (item) => {
      let self = this;
      if (Array.isArray(item)) {
        nextArr = self.calculateDepth(item);
        if (res < nextArr) res = nextArr;
      }
    });
    return ++res;
  } 
};