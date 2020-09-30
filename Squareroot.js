/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 1, r = x, mid = 0;
    while( l <= r) {
        mid = Math.floor((l + r) /2);
        if(mid**2 < x) {
            l = ++mid; 
        } else if(mid**2 > x) {
            r = --mid;
        } else { return mid; }
    }
    return mid;
};


//Space Complexity = O(1)
//Time Complexity = O(lg n)
