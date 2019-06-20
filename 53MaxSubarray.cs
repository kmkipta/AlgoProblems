public class Solution {
        public int MaxSubArray(int[] nums) 
        {
            if (nums.Length == 0) return 0;
            var curr = nums[0];
            var max = curr;
            for (int i = 0; i < nums.Length; i++) 
            {
                // if current is losing value, replace
                if (nums[i] > curr + nums[i])
                    curr = nums[i];
                else 
                    curr = curr + nums[i];
                
                max = curr > max ? curr : max;
            }
            return max;
        }

}
