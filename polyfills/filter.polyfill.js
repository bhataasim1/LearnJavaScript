let arr = [1,2,3,4];

//const res = arr.filter((item) =>  item > 2);

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for(let i = 0; i < this.length; i++) {
    // if the condition is met this push the item in array (temp array)
    if(cb(this[i], i, this)) {
      temp.push(this[i]);
    }
    
  }

  return temp;
}

const result = arr.myFilter((item) => item > 2);

console.log(result)
