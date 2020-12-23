/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   
    let result = [], reverse = true, oddList = Math.floor(matrix.length %2) === 0? false: true;
    
    const pushToResultArray = (matrix) => matrix.map(m => m !== undefined ? result.push(m): null)
    
    const reverseArray = (arr) => {
        if(arr !== undefined) {
            
            let result = [], i = arr.length -1;

            arr.map(m => result[i--] = m);
            return result;  
        }
        return [];
    }
    
    const circleArray = (matrix) => {
        //Circles around the matrix
        let i = 1, frontElement = [];
        
        result.push(...matrix.shift());
        
        let lastRow = reverseArray(matrix.pop()); 
        
        matrix.map(m => {
            let tempArr = m;
            
            if(tempArr.length > 0) {
                result.push(tempArr.pop());     
            }
            
            if(tempArr.length > 0) {
                frontElement.push(tempArr.shift());
            }
        })
        
        result.push(...lastRow);
        
        frontElement = reverse && frontElement ? reverseArray(frontElement) : frontElement
        result.push(...frontElement);
        
        frontElement = [];
    }
    
    while(matrix.length > 0) {
        
        circleArray(matrix);
        if(oddList) {
            reverse = !reverse;
        }
    }
    
    return result;
};
