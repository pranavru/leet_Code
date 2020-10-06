/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 1, mid = Math.floor(n/2), start = Math.floor(n %2);
    if(n ==1) return 1;
    while(mid != 0) {
        count += (fact(mid + start)) / (fact(mid) * fact(start));
        mid--;
        start +=2;
    }
    return count;
};

let fact = (n) => {
    if(n === 0) return 1;
    return n * fact(n -1);            
}
