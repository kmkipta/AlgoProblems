class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: []) -> int:
        l = set()
        alpha = 'abcdefghijklmnopqrstuvwxyz'
        conQ = []

        for word in wordList:
            l.add(word)
        pair = (beginWord, 1)
        conQ.append(pair)

        while len(conQ) != 0:
            p = conQ.pop(0)
            curStr = list(p[0]) # access tuples with indices, also make sting list
            if curStr == endWord: # reached the target
                return p[1] # return the dist in terms of number of changes from beginWord
            for i in range(len(curStr)-1):
                for c in range(len(alpha)-1):
                    letter = curStr[i]
                    if letter != alpha[c]:
                        curStr[i] = alpha[c]
                    if ''.join(curStr) in l:
                        # must convert list back to string
                        newPair = (''.join(curStr), p[1] + 1) # 1 more jump from current word to reach here
                        conQ.append(newPair) # word is processed, remove from dict
                        l.remove(''.join(curStr))
                    curStr[i] = letter
        return 0
        

sol =  Solution()  
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
print(sol.ladderLength(beginWord, endWord, wordList))