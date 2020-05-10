import java.util.*;

class Solution {
    public int strStr(String haystack, String needle) {
        int result = -1;
        int savedIdx = 0;

        if (needle.length() == 0)
            return 0;
        
        for (int i = 0; i < haystack.length(); i++) {
            // if a match
            if (haystack.charAt(i) == needle.charAt(0)) {
                int j = 0; // needle index counter
                savedIdx = i; // to go back to if match is false

                // traverse two strs
                while (j < needle.length() && i < haystack.length() && haystack.charAt(i) == needle.charAt(j)) {
                    j++;
                    i++;
                }

                // if we moved through the entire word length, then it is found
                if (j == needle.length()) {
                    result = savedIdx;
                    break;
                }
                i = savedIdx;
            }
        }
        return result;
    }

}
