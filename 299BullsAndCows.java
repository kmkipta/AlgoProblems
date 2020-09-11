class Solution {
    public String getHint(String secret, String guess) {
        int bulls = 0;
        int cows = 0;
        HashMap<Character, Integer> h = new HashMap();
        for (char s : secret.toCharArray()) {
            h.put(s, h.getOrDefault(s, 0) + 1);
        }
        
        for(int i = 0; i < guess.length(); i++) {
            char gl = guess.charAt(i);
            char sl = secret.charAt(i);   
            
            // only if secret contians letter can we proceed
            if (h.containsKey(gl)) {
                if (gl == sl) {
                    bulls++;
                    // remove chars as we find them
                    if (h.get(gl) <= 0)
                        cows--;  
                } else if (h.get(gl) > 0) {
                        cows++;
                }

                // guess char has been used
                h.put(gl, h.get(gl) - 1); 
            }
        }
        return printHint(bulls, cows);
    }
    
    public String printHint(int bulls, int cows) {
        return String.format("%dA%dB", bulls, cows); 
    }
}