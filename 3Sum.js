/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums.sort((a, b) => a - b);                                             //O (n)
    let result = [], n = nums.length;
    
    for(let i = 0; i < nums.length; i++) {                                  // O(n) * O(lg n) = O(n . lg n)
        
        if(nums[i] > 0 || nums[n -1] < 0) { break; }
        
        if(i === 0 || nums[i] !== nums[i -1]) {
            let left = i +1, right = n -1;
            
            while(left < right) {                                           // O(lg n)  
                let sum = nums[i] + nums[left] + nums[right];
                if(sum < 0) {
                    left++;
                } else if(sum > 0) {
                    right--;
                } else {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while(nums[left] === nums [ left -1]) { left++ }        //O(lg n)
                }
            }
        } 
    }
    return result;
};

//Time Complexity - worst case can reach to O (n ^2) 
//Space Complexity - O (n)

//Use sets to verify if there are multiple entries to the same triplets. If asked for unique solution
