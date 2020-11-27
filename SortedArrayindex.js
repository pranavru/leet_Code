/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0, j = nums.length -1;
    if(target === nums[i]) { return i; }
    while (i <= j) {                                    // O(lg n) ~ O(n)
        if(target === nums[i]) { return i; }
        else if(target === nums[j]) { return j; }
        j--;
        i++;
    }
    return -1;
};
