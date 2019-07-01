class Solution:
    def maxProfitBrute(self, prices: List[int]) -> int:
        mp = 0
        for i in range(len(prices)):
            # print('in outer: {}'.format(i))
            j = i
            while j < len(prices):
                diff = prices[j] - prices[i]
                if diff > mp:
                    mp = diff
                j += 1
        return mp
    
    # looking for the greatest valley, followed by the greatest peak - keep track of min
    def maxProfit(self, prices: List[int]) -> int:
        mp = 0
        minprice = float('inf') # max float
        for i in range(len(prices)):
            if prices[i] < minprice:
                minprice = prices[i]
            elif (prices[i] - minprice) > mp:
                mp = prices[i] - minprice
        return mp
                          
