class Solution {
    public int search(int[] nums, int target) {
        int offset = 0;
        return binSearch(nums, target, offset);
    }

    public int binSearch(int[] nums, int target, int offset) {
        var mdptIdx = (int) Math.floor(nums.length / 2);
        var mdpt = nums[mdptIdx];
        if (mdpt == target) {
            return offset + mdptIdx;
        }
        if (mdptIdx == 0) {
            return -1;
        }

        if (target < mdpt) {
            var subArray = new int[mdptIdx];
            for (int i = 0; i < mdptIdx; i++) {
                subArray[i] = nums[i];
            }

            return binSearch(subArray, target, offset);
        } else {
            var subSize = nums.length - mdptIdx;
            var subArray = new int[subSize];
            int j = mdptIdx;
            for (int i = 0; i < subSize; i++) {
                subArray[i] = nums[j];
                j++;
            }

            return binSearch(subArray, target, offset + mdptIdx);
        }
    }
}