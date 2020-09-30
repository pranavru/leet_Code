/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    let l = 1, r = num, mid = 0;
    if(l == r) return true;
    while(l <= r) {
        mid = Math.floor((r + l)/2);
        if(mid **2 < num) {
            l = ++mid;
        } else if(mid  **2 > num) {
            r = --mid;
        } else { return true; }
    }
    return false;
};

//Space Complexity - O(1) as it doesn't involve any Data Structures except variables
//Time Complexity - O(lg n) Using Binary Search Algorithm.
