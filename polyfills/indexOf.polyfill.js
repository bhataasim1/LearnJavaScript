
let arr = [10, 20, 30, 40];

// console.log(arr.indexOf(20, -2))

Array.prototype.myIndexOf = function (searchItem, fromIndex = 0) {
  
  let newIndex = fromIndex < 0 ? fromIndex + this.length : fromIndex;
  
  
  for(let i = newIndex; i < this.length; i++) {
     
    if(this[i] === searchItem) {
      return i;
    }
  }
  
  return -1;
  
}

console.log(arr.myIndexOf(20, -2))
console.log(arr.myIndexOf(20))
