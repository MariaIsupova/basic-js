const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(value);
    return chainMaker;
  },

  removeLink(position) {
    if (position > this.chain.length || !position instanceof Number || position === 0) {
      this.chain = []
      throw 'Error';
    }
    this.chain.splice(position - 1, 1)
    return chainMaker
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker
  },
  finishChain() {
    if (this.chain.length === 0) {
      throw 'Error';
    }
    if (this.chain.length === 1 || this.chain.length < 2) {
      this.chain[0] = '( ' + this.chain[0] + ' )'
    }
    if (this.chain.length > 1) {
      this.chain[0] = '( ' + this.chain[0] + ' )'
      for (let i = 1; i < this.chain.length; i++) {
        this.chain[i] = '~~( ' + this.chain[i] + ' )'
      }

    }
    let res = this.chain.join('')
    this.chain = []
    return res
  }
};

module.exports = chainMaker;
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())