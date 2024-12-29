
let arr = [10, 20, 30, 40];

Array.prototype.myFind = function (cb) {
  
  for(let i = 0; i < this.length; i++){
    if(cb(this[i], i, this)){
      return this[i];
    }
  }
}


console.log(arr.myFind((val) => val > 20))
