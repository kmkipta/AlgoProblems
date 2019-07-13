import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        r = ''
        for i in range(len(s)-1,-1,-1):
            if s[i].isalpha() or s[i].isdigit():
                r += (s[i])
        if r == s: 
            return True
        return False

sol = Solution()
s = 'racecar'
sol.isPalindrome(s)
print(sol.isPalindrome(s))