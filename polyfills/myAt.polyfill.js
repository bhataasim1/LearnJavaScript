let arr = [1,2,3,4];

// at(index) takes index and returns the element on that index
// const res = arr.at(2)

Array.prototype.myAt = function (index) {
  //Note:: if the index is provided as negative then = index + length of array

  return index > 0 ? this[index] : this[index + this.length]
}

const result = arr.myAt(2);
console.log(result) // output = 3

const result2 = arr.myAt(-2);
console.log(result2) // output = 3

const result3 = arr.myAt(-4);
console.log(result3)  // output = 1
