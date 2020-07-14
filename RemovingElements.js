/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */
var removeElement = function(nums, val) {
    let i = 0, j = nums.length -1;
    if(!nums) return 0;
    while(i <= j) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
        if(nums[j] === val) {
            nums.splice(j, 1);
            j++;
        }
        i++;
        j--;
    }
    return nums.length;
};
