const arr = [10,20,30,40,50]

// console.log(arr.unshift(100, 200))
// console.log(arr)

Array.prototype.myUnshift = function(...items) {
  const temp = [...items, ...this];
  
  for(let i = 0; i < temp.length; i++) {
    this[i] = temp[i]
  }
  
  return this.length;
}

console.log(arr.myUnshift(100, 200))
console.log(arr)
