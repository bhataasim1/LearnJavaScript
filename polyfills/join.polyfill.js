
let arr = [10,20,30,40];

// console.log(arr.join("+, "))

Array.prototype.myJoin = function (seperator = ",") {
  let res = "";
  
  if(this.length){
    
    for(let i = 0; i < this.length; i++) {
      if(i > 0) {
        res = res + seperator;
      }
      res = res + this[i];
    }
    
    return res
    
  }
  
  return ""
}

console.log(arr.myJoin())
console.log(arr.myJoin("-"))
