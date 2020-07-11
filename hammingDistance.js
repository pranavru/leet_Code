/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 */
var hammingDistance = function(x, y) {
    
    
    //Using Bitwise operators - &, ^, >>>
    // & - sets if each bit is 1
    // ^ - To identify which bits are different. XoR sets only those bits that are not same    
    // >> - Perform Right shift to elimiate last digit without adding leading zeros such that result becomes 0
    
    let result = x ^ y;
    let bitCount = 0;
    while(result !== 0) {
        bitCount += (result & 1);
        result = result >> 1;
    }
    return bitCount;
};
