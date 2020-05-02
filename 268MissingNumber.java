import java.util.ArrayList;

public class Solution {
    public int missingNumber(int[] nums) {
        int result = 0;
        int totalSize = nums.length + 1;

        // build tempArray
        ArrayList<Integer> tempArray = new ArrayList<Integer>(nums.length);
        ArrayList<Integer> masterArray = new ArrayList<Integer>(totalSize);

        for (int i : nums )  tempArray.add(i);
        for (int i = 0; i < totalSize; i++) masterArray.add(i);

        // remove excess nums
        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
            masterArray.set(nums[i], 0);
        }

        result = masterArray.stream().mapToInt(Integer::intValue).sum();
        return result;
    }
}