/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    
    //Initialize K_new array to values of K <===> K = 34; K_new = [3, 4]
    let K_new = K.toString(10).split('').map(val => parseInt(val));
     
    //Initialize Result array to zero( 0 ) 
    let result = Array(Math.max(A.length, K_new.length)).fill(0);
    
    //initialize iterator, carryover value
    let i = 0, carryOver = 0;
    
    //Run while loop till max length between A || K_new
    while(i < result.length) {
        let sum = carryOver + parseInt((A.length - 1 -i) < 0 ? 0: A[A.length - 1 -i]) + parseInt((K_new.length - 1 -i) < 0 ? 0: K_new[K_new.length - 1 -i]);
        
        result[result.length -1 -i] = sum %10;
        carryOver = Math.floor(sum /10);
        i++;
    }
    if(carryOver) result.unshift(carryOver);
    
    return result;
};
