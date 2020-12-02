class Solution {
    HashMap<Character, Integer> symbols = new HashMap<Character, Integer>();

    public int romanToInt(String s) {
        int sum = 0;

        // init
        symbols.put('I', 1);
        symbols.put('V', 5);
        symbols.put('X', 10);
        symbols.put('L', 50);
        symbols.put('C', 100);
        symbols.put('D', 500);
        symbols.put('M', 1000);

        int i = 0;
        while (i < s.length()) {
            var currentSymbol = s.charAt(i);
            int currentValue = symbols.get(currentSymbol);
            int nextValue = 0;
            if (i + 1 < s.length()) {
                var nextSymbol = s.charAt(i + 1);
                nextValue = symbols.get(nextSymbol);
            }

            if (currentValue < nextValue) {
                sum += (nextValue - currentValue);
                i += 2; // inc twice bc we compare the next two nums
            } else { // also handles last number edge case
                sum += currentValue;
                i += 1;
            }

        }
        return sum;
    }