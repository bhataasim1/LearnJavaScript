let arr = [1,2,3,4];

// forEach is similar to map only difference is it modifies the original array instead of returning new array
//const res = arr.forEach((item, index, array) => {})

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    //update the current element of array
    this[i] = cb(this[i], i, this)
  }
}

const result = arr.myForEach((item) => {
  return item * 2;
})

console.log(result) // output = undefined
console.log(arr)  // output will be updated array
