import math

class Solution(object):
    # empty contructor
    def __init__(self):
        self.resList = []
        self.cnt = 0

    def countPrimes(self, n):
        cnt = 0
        # list of quick hits
        i = 1
        numMap = {}
        while i <= n:
            numMap[i] = True
            i += 1

        # Sieve of Eratosthenes
        i = 2 # start at 2
        # loop over all numbers until i^2 > n
        while i <= math.sqrt(n):
            if numMap[i] is True:
                # remove multiples of each number
                j = 2
                k = 0 # multiple counter
                while j <= n:
                    numMap[j] = False
                    j = math.pow(i, 2) + k * i
                    k += 1
            i += 1
        # iterate over keys, count all primes
        for num in numMap:
            if numMap[num] is True: 
                cnt += 1
        return cnt

sol = Solution()
print(sol.countPrimes(3))
