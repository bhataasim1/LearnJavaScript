let arr = [1,2,3,4]

// MAP cb fun takes arg as currentItem, index and array and returns new array
//const res = arr.map((item, index, array) => {});

Array.prototype.myMap = function (cb) {
  let temp = [];

  for(let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp
}

const result = arr.myMap((item) => {
  return item * 2;
})

console.log(result)
