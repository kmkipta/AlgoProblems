# Runtime O(n^2)
# Runspace O(n)
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_count = 0
        i = 0
        while i < len(s):
            j = i
            curr_word = set()
            if s[i] not in curr_word:
                while j < len(s) and s[j] not in curr_word:
                    curr_word.add(s[j])
                    j += 1
                else:
                    max_count = max(max_count, len(curr_word))
            i += 1
        return max_count
