/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows === 1) { return s; }
    let finalAns = "", result = [], i =0, rev = false, count =0;
    
    //Runs till the whole string is traversed
    while(i < s.length) {
    
        //Initialized the strings to ""
        if(result[count] === undefined) { result[count] = ""; }
        
        //Added the char to the strings based on the 0th, 1st, 2nd or 3rd value and so on...
        result[count] += s[i];
        
        //Resets the count from 0 to numRows and back to zero ==> 0, 1, 2, 3, 2, 1, 0
        if(count === numRows -1) { rev = true; } else if(count === 0) { rev = false; }
        
        //Boolean value to inc and dec the count value
        if(rev === true) {
            count--;
        } else {
            count++;
        }
        i++;
    }
    
    result.map(r => finalAns += r);
    return finalAns;
};

//Time Complexity - O (n)
//Space Complexity - O (n)
