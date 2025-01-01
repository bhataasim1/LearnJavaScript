
let arr = [10,20,30, 40];

// console.log(arr.reverse())

Array.prototype.myReverse = function () {
  
  for(let i = 0; i < this.length / 2; i++) {
    let temp = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = temp;
  }
  
  return this;
}

console.log(arr.myReverse())
console.log(arr)
