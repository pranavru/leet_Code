/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let swapFunction = function (indexTo, indexWith) {                  // O(1)
        // Bubble Sorting
        let temp = nums[indexTo];
        nums[indexTo] = nums[indexWith];
        nums[indexWith] = temp;
    }
    
    let reverseFunction = function (indexFrom, indexTo) {               // O(lg n)
        while(indexFrom <= indexTo) {
            swapFunction(indexFrom++, indexTo--);
        }
    }
    
    let i = nums.length -2;
    while(i >= 0 && nums[i] >= nums[i+1]) {                             // O(lg n) ~ O(n)
        i--;
    }
    
    if( i >= 0) {
        let j = nums.length -1;
        while(nums[j] <= nums[i]) {                                     // O(lg n) ~ O(n)
            j--;
        }
        swapFunction(i, j);
    }
    
    reverseFunction( i +1, nums.length -1);                             
};

//Time Complexity - O(n)
//Space Complexity - O(1)
