const CustomError = require("../extensions/custom-error");

const chainMaker = {
  // chain: '',
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    console.log('length start')
    var count = 0
    this.chain.forEach(element => {
      if (element === '(') {
        count++
      }
    }); 
    console.log('length=',count)
    return count
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    console.log('add start')
    if (this.chain === '') {
      this.chain = `(${value})`
    } else {
      this.chain += `~~(${value})`
    }
    console.log('add', this.chain)
    // return this.chain
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    var count = 0
    var start = -1
    for (i = 0; i < this.chain.length; i++) {
      if (this.chain[i] === '(') {
        count++
        if (position === count) {
          star = i
        }
      }
      if (this.chain[i] === ')' && position === count) {
        var end = i
        break;
      }
    }
    if (star === -1) {
      throw new CustomError('Not implemented');
    }
    console.log('remove from', start, 'to', end)
    this.chain = this.chain.replace(this.chain.substring(start, end), "")
    console.log('remove', this.chain)
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.split("").reverse().join("")
    console.log('reverse', this.chain)
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    // return this.chain
    this.chain = ''
  }
};

module.exports = chainMaker;
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())