function removeDuplicates(nums: number[]): number[] {
  let total: number[] = []
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i -1]) {
      total.push(nums[i])
    }
  }
  
  return total;
}

console.log(removeDuplicates([1,1,1,1,2,2,3]))


//leetcode problem solution::
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  let total: number = 0;
  // let total: number[] = []
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i -1]) {
      nums[total] = nums[i];
      total++
      // total.push(nums[i])
    }
  }
  
  return total;
}

console.log(removeDuplicates([1,1,2]))
