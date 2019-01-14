class Solution {
public:
    int lengthOfLongestSubstring(string s) {
      int size = s.length();
      unordered_set<char> us = unordered_set<char>();
      int r = 0, i = 0, j = 0;
      
      while (i < size && j < size) {
        //unordered_set<char>::const_iterator iter;
        if (us.find(s[j]) == us.end()) {
          us.insert(s[j++]);
          r = max(r, j - 1);

        } else {
          us.erase(s[i++]);
        }
        
      }
      return r;
    }
};