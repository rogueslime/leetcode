/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**

/*
 * @param {TreeNode} root
 * @return {number[]}
 */

/** Thought Process

Inorder traversal starts at the bottom leftmost child, then its root, then  right, then repeat (moving up to the next bottom-leftmost node)

First check if root is null; if so, return an empty array. Otherwise, begin parsing our tree.
First, check if there is a left root. If so, the newRoot becomes root.left. If not, it becomes
root.right. If there are no more roots, newRoot simply becomes Root.

If newRoot=root, terminate + begin recursive building as this means there are no left or right children remaining.
If we pass to left or right, continue passing the method down.
 
 */


var inorderTraversal = function(root) {
    if(root == null) {
        return [];
    } else {
        newRoot = (root.left || root.right || root)
        if(newRoot == root ) { return[newRoot.val] }
        traversalArray = inorderTraversal(newRoot)
        return[...traversalArray, root.val]
        
    }

};
