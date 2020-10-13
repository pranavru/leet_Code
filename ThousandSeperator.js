/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let resultString ="", nString= numberToArray(n);
    nString.map((digit, index) => {
        //1000 ~ 10^3: Check if index belongs to every 3rd element other than zeroth(0) element
        if((nString.length - index) %3 === 0 && index !== 0) {
            resultString += ".";
        }
        resultString += digit;
    })
    return resultString;
};

//Convert a number into an array of digits
var numberToArray = (n) => {
    const arr = [];
    
    //Convert String to Integer
    const s = String(n);
    for(let i =0; i< s.length; i++) {
        arr.push(s[i])        
    }
    return arr;
}
