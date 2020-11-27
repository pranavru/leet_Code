/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!inorder || inorder.length < 1) { return null; }
    
    //Returns the index value of a number
    let indexOf = (num) => {                            // O(lg n)
        let i = 0,  j = inorder.length -1;
        while(i <= j) {
            if(inorder[i] === num) {
                return i;
            } else if(inorder[j] === num) {
                return j;
            }
            i++;
            j--;
        }
        return;
    };
    
    //Locates the root value
    let rootValue = preorder.shift(), indexOfRoot = inorder.indexOf(rootValue);

    // Recursive function to return root value
    return new TreeNode(rootValue, buildTree(preorder,inorder.slice(0, indexOfRoot)), buildTree(preorder, inorder.slice(indexOfRoot +1)));
};
