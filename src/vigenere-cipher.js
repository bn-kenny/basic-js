const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    if (type === false) {
      this.type = 'reverse';
    } else {
      this.type = 'direct';
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error();
  }    

  decrypt() {
    
  }
}

module.exports = VigenereCipheringMachine;
