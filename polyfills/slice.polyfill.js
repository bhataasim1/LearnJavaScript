const arr = [10,20,30,40,50]

//console.log(arr.slice())

Array.prototype.mySlice = function(start = 0, end = this.length) {
  let res = []
  
  let newStartIndex = start < 0 ? start + this.length : start;
  let newEndIndex = end < 0 ? end + this.length : end;
  
  for(let i = newStartIndex; i < newEndIndex; i++) {
    res.push(this[i])
  }
  
  return res;
}

console.log(arr.mySlice())
console.log(arr.mySlice(-2))
console.log(arr.mySlice(1, -2))
