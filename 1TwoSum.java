class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        var found = false;
        int j = 1;

        if (nums.length < 2) {
            return result;
        }

        while (!found && j < nums.length) {
            int i = 0;
            while (i < j) {
                if ((nums[i] + nums[j]) == target) {
                    result[0] = i;
                    result[1] = j;
                    found = true;
                }
                i++;
            }
            j++;
        }
        return result;
    }
}
