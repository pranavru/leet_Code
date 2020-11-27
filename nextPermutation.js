/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let swapValues = {};
    
    let swapValuesFunction = function () {
        let i =0, n = nums.length
        while(i < n) {
            let j = n -1;
            while(i < j) {
                if(nums[i] < nums[j]) {
                    swapValues = {startIndex: i, endIndex: j};
                    break;
                }
                j--;
            }
            i++;
        }
    }
    
    swapValuesFunction();
    if(!swapValues.hasOwnProperty('startIndex')) {
        return nums.reverse();
    } else {
        //Bubble sort
        let tmpStart = nums[swapValues.startIndex];
        nums[swapValues.startIndex] = nums[swapValues.endIndex];
        nums[swapValues.endIndex] = tmpStart;

        
        //Sort the end digits.
        let sortedSeq = nums.slice(swapValues.startIndex +1).sort((a, b) => a-b);
        nums.map((n,  i) => {
            if(i > swapValues.startIndex) {
                nums[i] = sortedSeq[i - swapValues.startIndex -1];
            }
        })
    }
};
