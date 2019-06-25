import math

class Solution(object):
    # square numbers in list, then sort
    def squareSort(self, numList):
        """
        :type numList: []
        :rtype: []
        """
        retList = []
        for n in numList:
            retList.append(math.pow(n, 2))
        # apply merge sort; note that the positive numbers are sorted, but negatives are not
        retList = self.merge_sort(numList)
        return retList

    def merge_sort(self, numList):
        res = []

        if len(numList) <= 1:
            return numList
        
        l = []
        r = []

        for x in range(len(numList)):
            # add to left
            if x < len(numList) / 2:
                l.append(x)
            # add to right
            else: 
                r.append(x)
        
        # recursively sort both
        l = self.merge_sort(l)
        r = self.merge_sort(r)

        # merge newly sorted sublists
        res = self.merge(l,r)
        return res

    def merge(self, l, r):
        res = []
        i = 0
        j = 0

        # merge elements to result one by one
        while i != len(l) and j != len(r):
            if l[i] <= r[j]:
                res.append(l[i])
                i += 1
                j += 1
            else:
                res.append(r[i])
                i += 1
                j += 1
        
        # its possible for one of the list to have excess elements - append them
        while i != len(l):
            res.append(l[i])
            i += 1
        while j != len(r):
            res.append(r[j])
            j += 1
        return res

sol = Solution()
testList = [-9, -2, 0, 2, 3]
print(sol.squareSort(testList))