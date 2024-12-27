


Array.prototype.myConcat = function(...args) {
  let temp = [...this];
  
  for(let i = 0; i< args.length; i++){
    let val = args[i]
    
    if(Array.isArray(val)) {
      
      for(let j = 0; j < val.length; j++){
        temp.push(val[j])
      }
      
    } else {
      temp.push(val)
    }
  }
  
  return temp
}

let arr = [1,2,3,4];
let arr2 = [5,6,7]
let arr3 = [8,9]

const res = arr.myConcat(arr2, 1, arr3, "d", [['a','a']])
console.log(res)
