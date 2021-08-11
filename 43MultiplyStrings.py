class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        num_map = {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9}
        def pad(n1: str, amt: int) -> int:
            total = num_map.get(n1)
            while amt > 1:
                total *= 10
                amt -= 1
            return total
        
        def convertToNum(n1: str) -> int:
            s = len(n1)
            num_val = 0
            for c in n1:
                # get index
                padded_val = pad(c, s)
                s -= 1
                num_val += padded_val
            return num_val
        
        cn1 = convertToNum(num1)
        cn2 = convertToNum(num2)
        
        return str(cn1 * cn2)
    
