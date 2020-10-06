/**
 * @param {number} n
 * @return {number}
 */
 
var climbStairs = function(n) {
    if(n === 1) return 1;
    
    //Step Sizes.
    let oneStep = 1, twoStep = 2, i = 0, result;
    for(i = 3; i <= n; i++) {
        result = oneStep + twoStep; //Every node head has 2 possibilities 
        oneStep = twoStep;
        twoStep = result;
    }
    
    //If n <= 2 && when iteration expires twoStep === result
    return twoStep;
};

 //Iterative approach with O(n) Time complexity
 //All previous recursive approach has O(lg n) as Time Complexity
