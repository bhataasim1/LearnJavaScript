let arr = [10,20,30,40,50,60];

Array.prototype.myFill = function (val, startIndex = 0, endIndex = this.length) {
  let temp = [...this];

  for(let i = startIndex; i < endIndex; i++) {
    temp[i] = val;
  }

  return temp
}

console.log(arr.myFill(0))

console.log(arr.myFill(0, 2))

console.log(arr.myFill(0, 2, 4))
