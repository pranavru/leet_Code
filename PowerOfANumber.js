/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1; 
    else if( n === 1 ) return x;
    else {
        if(n < 0) return myPow(1/x, n * -1)
        
        // Checks if number is multiple of 2 or not
        return (n %2) === 0 ? myPow(x **2, n /2) : x * myPow(x, n -1);        
    }
};

//Space Complexity - O(1)
//Time Complexity - O(1)
