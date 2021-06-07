class Solution:
    # https://leetcode.com/problems/paint-house/submissions/
    # runtime O(n)
    def minCost(self, costs: List[List[int]]) -> int:
        # need to startfrom bottom up. start with red color on second to last row and calc min of blue and green
        # continue for blue and green 
        # n = index of house
        for n in reversed(range(len(costs) - 1)):
            print(n)
            print(costs[n])
            # costs for red house on current row
            costs[n][0] += min(costs[n + 1][1], costs[n + 1][2])
            # costs for green house on current row
            costs[n][1] += min(costs[n + 1][0], costs[n + 1][2])
            # costs for blue house on current row
            costs[n][2] += min(costs[n + 1][0], costs[n + 1][1])
            print(costs[n])
            
        return min(costs[0]) # Return the minimum in the first row.
