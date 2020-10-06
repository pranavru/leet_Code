/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    //Recursive Solution Implementation
    let countStairs = (stairs, results) => {
        
        //Valid Path Constraints
        if(stairs < 0) return 0;
        if(stairs === 0) return 1;
        
        //Return result of stairs tree already calculated.
        if(results[stairs]) {
            return results[stairs];
        }
        
        //Adds the left and right portion of a node where left is subtracted by n -1 and right by n-2
        results[stairs] = countStairs(stairs -1, results) + countStairs(stairs -2, results);
        
        return results[stairs];
    }
    
    //Initial call to countStairs() Func: initialzie stairs to n, and paths to empty object {}
    return countStairs(n, {});
};
