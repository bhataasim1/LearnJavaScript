const arr = [10,20,30,40,50]

const above = (item) => item > 20;

//console.log(arr.some(above))

Array.prototype.mySome = function (cb) {
  for(let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)) {
      return true;
    }
  }
  
  return false;
}

console.log(arr.mySome(above))
