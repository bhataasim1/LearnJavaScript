
let arr = [10, 20, 30, 40];

// console.log(arr.includes(20, -1))

Array.prototype.myIncludes = function (searchItem, fromIndex = 0) {
  
  
  let newIndex = fromIndex;
  
  if(fromIndex < 0) newIndex = fromIndex + this.length;
  
  for(let i = newIndex; i < this.length; i++){
    if(this[i] === searchItem){
      return true
    }
  }
  
  return false;
}

console.log(arr.myIncludes(30, -2))
console.log(arr.myIncludes(30))
