
let arr = [10, 20, 30, 40, [50], [[60]]];

// console.log(arr.flat(2))

Array.prototype.myFlat = function (depth = 1) {
  let temp = [];
  
  for(let i = 0; i < this.length; i++){
    let item = this[i];
    
    if(Array.isArray(item) && depth > 0) {
      temp = temp.concat(item.myFlat(depth - 1))
    } else {
      temp.push(item);
    }
  }
  
  return temp;
  
}

console.log(arr.myFlat())
console.log(arr.myFlat(2))
