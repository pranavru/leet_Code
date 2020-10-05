/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carryover = 0, result = Array(Math.max(a.length, b.length)).fill(0), i =0;
    
    while(i < result.length) {
        //sum = carryover +                                             //Until both index reaches -1, add array[index] or 0 to sum
        // For a, (2 - 0) < 0 {if} -> return a[2 - 0], {else} -> 0+ 
        // For b, (1 - 0) < 0 {if} -> return b[1 - 0], {else} -> 0+ 
        const sum = (a.length -1 - i < 0 ? 0: a[a.length -1 -i] *1) + (b.length -1 - i < 0 ? 0: b[b.length -1 -i] *1) + carryover;
        
        //Fetch the units digit using modulus operator
        result[result.length -1 -i] = sum %2;
        
        //Fetch the remainder by diving the number by 2
        carryover = Math.floor(sum /2);    
        i++;
    }
    
    //Adds one to the start of the result array if carryover = 1
    if(carryover) {
        result.unshift(1);
    }
    
    return result.join('')

};
