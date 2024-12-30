
let arr = [10,20,30, 40];

//console.log(arr.lastIndexOf(20, -2))

Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length) {
  
  const newIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;
  
  for(let i = newIndex; i >= 0; i--) {
    if(this[i] === searchElement) {
      return i;
    }
  }
  
  return -1
}

console.log(arr.myLastIndexOf(20))
console.log(arr.myLastIndexOf(20, 2))
console.log(arr.myLastIndexOf(20, -2))
