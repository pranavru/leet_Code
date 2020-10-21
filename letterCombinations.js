/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    //If No digits fouund, return []
    if (!digits) return [];
    
    //Create a Map of digits as digitsPad
    let digitsPad = {2: ["a","b","c"], 3: ["d","e","f"], 4: ["g","h","i"], 5: ["j","k","l"], 6: ["m","n","o"], 7: ["p","q","r","s"], 8: ["t","u","v"], 9: ["w","x","y","z"]};
    
    const result = [];
    
    //Recursively call the function as per the numbers of the digits string
    const iterateDigits = (i, prefix) => {
        
        Push the prefixs (permutations) in the resulting array 
        if(i > digits.length -1 ) {
            result.push(prefix); 
            return;
        }
        
        //Digit value of the digits. For example, "23" as 2 and 3.
        const digit = digits[i];

        // Find the characters specific to the number available in the digits pad and make a recursivve function call using next value.
        for(let char of digitsPad[digit]) {
            iterateDigits(i + 1, prefix + char)
        }
    }
    
    //make an initial call to the function
    if(digits.length > 0) {
        iterateDigits(0, "");
    }
    
    return result;
};
