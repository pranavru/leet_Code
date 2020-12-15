/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let lengthOfArray = matrix.length, top = 0, bottom = lengthOfArray -1;
    let reverseArrayVertically = () => {                //O(lg n)
        while(top < bottom) {
            let temp = matrix[top];
            matrix[top] = matrix[bottom];
            matrix[bottom] = temp;
            top++;
            bottom--;
        }
    }
    reverseArrayVertically();

    for(let i = 0; i < lengthOfArray; i++) {            //O(n lg n)
        let j = i;
        while(j < lengthOfArray) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            j++;
        }
    }

};
