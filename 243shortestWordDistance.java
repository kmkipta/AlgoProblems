class Solution {
    public int shortestDistance(String[] words, String word1, String word2) {
        // memo num of steps to word from left
        var minDist = Integer.MAX_VALUE;
        for(int i = 0; i < words.length; i++) {
            if (words[i].equals(word1)) {
                // peak left and right
                int l = i - 1, r = i + 1;

                // expand left and right checking for matches
                while (l > -1 || r <words.length) {
                    if (l > -1 && words[l].equals(word2)) {
                        minDist = Math.min(Math.abs(l - i), minDist);
                    }

                    if (r < words.length && words[r].equals(word2)) {
                        minDist = Math.min(Math.abs(r - i), minDist);
                    }
                    l--;
                    r++;
                }
            }
        }
        return minDist;
    }
}