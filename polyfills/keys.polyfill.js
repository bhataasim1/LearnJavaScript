
let arr = [10,20,30, 40];

// const iter = arr.keys()

// for(const key of iter) console.log(key)

Array.prototype.myKeys = function () {
  const val = this; // assigned to val, to avoid the bind.
  
  function* generator() {
    for(let i = 0; i < val.length; i++) {
      yield i;
    }
  }
  
  return generator();
}

const iter = arr.myKeys()

for(const key of iter) console.log(key)
