function isPlandromeNumber(num: number): boolean {
  let temp = num;
  let rev = 0;
  
  if(num < 0) return false;
  
  while (num > 0) {
    rev = (rev * 10) + (num % 10);
    num = Math.floor(num / 10)
  }
  
  return rev === temp;
}

console.log(isPlandromeNumber(121))
