
let arr = [10, 20, 30, 40];

Array.prototype.myFindLastIndex = function (cb) {
  
  for(let i = this.length; i > 0; i--){
    if(cb(this[i], i, this)){
      return i;
    }
  }
}


console.log(arr.myFindLastIndex((val) => val > 20))
