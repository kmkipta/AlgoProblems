class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int indexOfLastZeroAdded = nums.size() + 1; 
        for (int i = 0; i < nums.size(); i++) {
            if (i == 0) {
                indexOfLastZeroAdded--;
                for (int j = i; j < nums.size(); j++) {
                    if ((j + 1) <= nums.size())
                        nums[j] = nums[j + 1];   
                }
                nums[indexOfLastZeroAdded] = 0;
            }
            else 
                continue;
        }
    }
};
