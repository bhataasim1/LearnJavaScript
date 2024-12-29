
let arr = [10, 20, 30, 40];

Array.prototype.myFindIndex = function (cb) {
  
  for(let i = 0; i < this.length; i++){
    if(cb(this[i], i, this)){
      return i;
    }
  }
}


console.log(arr.myFindIndex((val) => val > 20))
