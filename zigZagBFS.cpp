/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 * 
 * BreadthFirstSearch
 * 
 */
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> r;
        vector<int> temp;
        queue<TreeNode*> conQ;
        conQ.push(root);

        int size = conQ.size();
        vector<int> row(size);

        while(!conQ.empty()){
            TreeNode* currNode = conQ.front();
            conQ.pop();


            if (currNode->left) {
                conQ.push(currNode);
            }

            if (currNode->right) {
                conQ.push(currNode);
            }
        }
        temp.push_back(currNode.val);

        for(size_t i = 0; i < temp.length(); i++)
        {
            cout << temp << ' ';
        }

        return r;
    }
};