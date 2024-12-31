
let arr = [10,20,30, 40, [50]];


// console.log(arr.pop());
// console.log(arr)

Array.prototype.myPop = function () {
  const value = this[this.length - 1];
  this.length = this.length -1;
  
  return value;
}

console.log(arr.myPop());
console.log(arr)

console.log(arr.myPop());
console.log(arr)
