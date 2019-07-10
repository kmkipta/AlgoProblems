class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        return self.climbStairsRecurse(0, n)
    
    def climbStairsRecurse(self, currStep, endStep):
        
        # base cases
        if currStep > endStep:
            return 0
        if currStep == endStep:
            return 1
        # add one recursive tree for each configuration
        return self.climbStairsRecurse(currStep + 1, endStep) + self.climbStairsRecurse(currStep + 2, endStep)
