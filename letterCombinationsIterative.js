/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    let digitsPad = {2: ["a","b","c"], 3: ["d","e","f"], 4: ["g","h","i"], 5: ["j","k","l"], 6: ["m","n","o"], 7: ["p","q","r","s"], 8: ["t","u","v"], 9: ["w","x","y","z"]}, j;
    
    //initialize result with the prefix as ''
    const result = [''];

    //Loop runs for number of digits in the digits string
    for(let i = 0 ; i < digits.length; i++ ) {
        const digit =  digits[i];
        
        // Insert the delimiter value as null 
        result.push(null)
        
        // Loop runs till the key values of digits pair 
        while((j = result.shift()) !== null) {

            //Creates the permutations of the digits
            for(let char of digitsPad[digit]) {
                result.push(j + char)
            }
        }
        
    }
    return result;
    
};
