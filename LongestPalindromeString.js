/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    //Checks if the given substring is a Palindrome or not.
    //Used indexes i & j to avoid an unnecessary substring operation.
    const isPalindrome = (i, j) => {
        while(i < j){
            if(s[i] != s[j]) {
                return false;                
            }
            i++;
            j--;
        }
        return true;
    }
    let k = 0;
    
    //Checks for every characters in a string
    while( k < s.length)
    {
        let i = 0;
        let j = s.length - 1 - k;
        
        //Designed using Sliding Window principle
        while(j < s.length)
        {
            if(isPalindrome(i, j)) { return s.substring(i, j +1); }
            i++;
            j++;
        }
        k++;
    }
    return s;
};
