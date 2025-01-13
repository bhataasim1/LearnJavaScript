//leet code:: https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length -1;
    
    for(let i = 0; i < nums.length; i++) {
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] === target) return mid;

        else if(nums[mid] > target) end = mid - 1;

        else start = mid + 1;
    }

    return start
   
};

console.log(searchInsert([1,3,5,6], 2))
