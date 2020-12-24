/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    /**
    * @param {string} str
    * @param {number} left
    * @param {number} right
    */
    const dfs = (str, left, right) => {
        if(right < left) return;
        if(left < 0) return;
        if(left === 0 && right === 0) {
            res.push(str);
            return;
        }
        
        dfs(str+"(", left -1, right)
        dfs(str+")", left, right -1)
    }
    dfs("", n, n)

    return res
};
