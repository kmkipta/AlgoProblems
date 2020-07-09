class Solution {
    public boolean isPalindrome(int x) {
        String s = Integer.toString(x);
        int bound = (int) Math.floor(s.length() / 2);
        int i = 0;
        int j = s.length() - 1;
        while (i != bound) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
