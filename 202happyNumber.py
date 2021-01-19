class Solution:
    def isHappy(self, n: int) -> bool:
        x = n
        seen = set()
        while x != 1:
            if x in seen:
                return False
            else:
                seen.add(x)
            nextNum = list(str(x))
            temp = 0
            for i in nextNum:
                temp = temp + pow(int(i), 2)
            x = temp
        return True
