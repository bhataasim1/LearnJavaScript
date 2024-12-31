
let arr = [10,20,30, 40];

// console.log(arr.push(50, 60, 'cows'))
// console.log(arr)

Array.prototype.myPush = function(...args) {
  let arrLength = this.length;
  
  for(let i =0; i < args.length; i++) {
    this[arrLength + i] = args[i];
  }
  
  return this.length;
}

console.log(arr.myPush(50, 60, 'cows'))
console.log(arr)
