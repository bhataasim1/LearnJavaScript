let arr = [1,2,3,4];

/// reduce takes the cb fun and an initial value [ cb(acc, currVal, index, arr) ]
//const res = arr.reduce((acc, currentValue) => { return acc+currentValue }, 0)

Array.prototype.myReduce = function (cb, initialValue) {
  // if initial value is not provided
  let acc = initialValue;

  for(let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc
}

const result = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0)

console.log(result)
