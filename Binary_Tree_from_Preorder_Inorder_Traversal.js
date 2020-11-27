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
    
    let indexOf = (num) => { 
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
    
    let root = new TreeNode(preorder.shift());
    
    let indexOfRoot = indexOf(root.val);
    let leftTree = inorder.slice(0, indexOfRoot);
    let rightTree = inorder.slice(indexOfRoot +1);
    
    root.left = buildTree(preorder,leftTree )
    root.right = buildTree(preorder, rightTree)

    return root;    
};
