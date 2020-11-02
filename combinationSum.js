/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [], tempArr = [];
    let indexValue = 0, totalSum = 0;
    
    //Tracks the temp[] array until its Sum is less than or equal to the target value
    //If sum > target, it returns without adding it to the resultant array. else if totalSum value is equal to the target then temp[] array is pushed.
    const trackSum = (tempArr, totalSum, indexValue) => {
        if(totalSum > target) {
            return;
        } 
        if(totalSum == target) {
            result.push([...tempArr]);
            return;
        }
        
        //Recursive function call till the end of array is reached, which adds value to the temp Arr and calculates it sum
        for(let i = indexValue; i< candidates.length; i++) {
            tempArr.push(candidates[i]);
            trackSum(tempArr, totalSum + candidates[i], i );
            tempArr.pop();
        }
        
    }   
    
    //Initialize the recursive function 
    trackSum(tempArr, totalSum, indexValue);
    return result;
};

//Loop runs for n! + n times 
//Space Complexity = O(n lg n)
