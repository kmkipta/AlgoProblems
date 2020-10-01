class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        int result = 0;
        int minVal = arrays.get(0).get(0);
        int maxVal = arrays.get(0).get(arrays.get(0).size() - 1);

        boolean firstLoop = true;
        for (List<Integer> li : arrays) {
            if (firstLoop) { 
                firstLoop = false; 
                continue;
            }  
            var f = li.get(0);
            var l = li.get(li.size() - 1);
            result = Math.max(result, Math.max(Math.abs(l - minVal), Math.abs(maxVal - f)));
            if (f < minVal) { minVal = f; }
            if (l > maxVal) { maxVal = l; }
        }
        
        return result;
    }   
}