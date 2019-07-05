class Solution:
    def maxSubArray(self, nums: []) -> int:
        maxSum = currSum = nums[0]
        for i in range(1, len(nums)):
            # always reset when our running sum dips too low
            currSum = max(nums[i], currSum + nums[i])
            # compare to global max
            maxSum = max(currSum, maxSum)
            
        return maxSum
            
