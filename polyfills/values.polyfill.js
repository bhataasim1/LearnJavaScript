const arr = [10,20,30,40,50]

// const iter = arr.values()

// for(const key of iter) console.log(key)

// console.log(iter.next())

Array.prototype.myValues = function () {
  let val = this;
  
  function* generator() {
    for(let i = 0; i < val.length; i++) {
      yield val[i]
    }
  }
  
  return generator();
}

const iter = arr.myValues()

// for(const key of iter) console.log(key)

console.log(iter.next())
