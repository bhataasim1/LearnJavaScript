
let arr = [10,20,30, 40];

// console.log(arr.shift())
// console.log(arr)

Array.prototype.myShift = function () {
  let firstValue = this[0];
  
  for(let i=1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  
  this.length = this.length -1;
  return firstValue;
}

console.log(arr.myShift())
console.log(arr)
