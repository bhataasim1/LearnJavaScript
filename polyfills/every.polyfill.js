let arr = [20, 30, 40, 50, 60]

const isAbove = (currVal) => currVal > 2;

// console.log(arr.every(isAbove))

Array.prototype.myEvery = function (cb) {

  for(let i = 0; i < this.length; i++) {

    if(!cb(this[i], i, this)) {
      return false;
    }
  }

  return true;
}

console.log(arr.myEvery(isAbove))
