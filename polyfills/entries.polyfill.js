let arr = ['a', 'b', 'c', 'd']

Array.prototype.myEntries = function () {
  
  function* generator() {
    for(let i = 0; i < this.length; i++) {
      yield [i, this[i]]
    }
  }
  
  return generator.call(this);
}

const iter = arr.myEntries();

for(const key of iter) {
  console.log(key)
}

/// Second Approach (without using the call method)

Array.prototype.myEntries = function () {
  let val = this;

  function* generator() {
    for(let i = 0; i < val.length; i++) {
      yield [i, val[i]]
    }
  }

  return generator()
}

const iter2 = arr.myEntries();

for(const key of iter2) {
  console.log(key)
}
