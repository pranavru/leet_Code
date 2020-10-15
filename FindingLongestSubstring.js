/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    //Create a set to add only distinct Values. An array can be maintained to obtain all possible strings.
    let bufferSet = new Set();
    let i = 0, j = 0, count=0;
    
    Run the loop for O(n) time
    while(s.length > j && j >=i) {
        
        //Delete the first element when its duplicate is encountered and shift initial pointer to +1 value
        while(bufferSet.has(s[j])) {
            bufferSet.delete(s[i]);
            i++;
        }

        //Add most recent traversed value to the list
        bufferSet.add(s[j]);
        j++;
        
        //Check if buffer Size is greater than the longest String. If yes, then update it with the longest
        if(count < j -i)
            count = j -i;
    }
    return count;
};
