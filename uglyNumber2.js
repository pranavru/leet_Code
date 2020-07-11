/**
 * @param {number} n
 * @return {number}
 * Write a program to find the n-th ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
 */
var nthUglyNumber = function(n) {
    let multiples = [2, 3, 5];
    
    let uglyNumber = new Set();
    uglyNumber.add(1);
    let numbers = [0, 0, 0];
    while(uglyNumber.size < n) {
        let arr = [...uglyNumber]
        const multi2 = arr[numbers[0]]*2;
        const multi3 = arr[numbers[1]]*3;
        const multi5 = arr[numbers[2]]*5;
        const result = Math.min(multi2, multi3, multi5);
        numbers[(result === multi2) ? 0 : (result === multi3) ? 1 : 2 ] += 1;
        uglyNumber.add(result);
    }
    return [...uglyNumber][n -1];
};
