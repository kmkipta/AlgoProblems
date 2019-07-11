class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        t = []
        t.extend(s) # note: do not assign, only extend, use indexes, etc
        s.clear()   # clears list and all ref lists
        for i in range(len(t)-1, -1, -1):
            print('i is %s' %i)
            s.append(t[i])
        
sol = Solution()
s = ["k", "i", "p", "t", "a"]
sol.reverseString(s)
print(s)