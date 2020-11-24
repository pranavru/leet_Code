/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    //Initializing closestSum to inifinity such that It isn't randomly close to target.
    
    let i = 0, n = nums.length, closestSum = Infinity;
    //Sorting the values
    nums.sort((a,b) => a-b);                //Time Complexity  -O(n)
    
    //Required group of 3 integers so exluding last 2 iterations (A group of numbers < 3).
    while(i < n -2) {                       //Time Complexity - O((lg n) ^2) ~ O(n ^2)

        //2 pointer solution
        let l = i +1, r = n -1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            closestSum = Math.abs(target -closestSum) < Math.abs(target - sum) ? closestSum: sum;
            if(sum > target ) { r --; }
            else if( sum < target ) { l ++; }
            else { return sum; }            //If the sum === target then it is the closest to the target
        }
        i++;
    }    
    
    //If exact target value is not found in the triplets return the closest absolute value possible 
    return closestSum;
};
