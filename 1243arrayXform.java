import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> transformArray(int[] arr) {
        
        List<Integer> firstArray = new ArrayList<Integer>();
        List<Integer> secArray = new ArrayList<Integer>();
        int head = arr[0];
        int tail = arr[arr.length - 1];

        for (int i = 0; i < arr.length; i++) {
            firstArray.add(arr[i]);
        }

        while (true) {    
            secArray.clear();
            secArray.add(head);
            Boolean unchanged = true;
            for (int i = 1; i < (firstArray.size() - 1); i++) {
                int leftNeighbor = firstArray.get(i - 1);
                int rightNeighbor = firstArray.get(i + 1);
                if (firstArray.get(i) < leftNeighbor && firstArray.get(i) < rightNeighbor) {
                    secArray.add(firstArray.get(i) + 1);
                    unchanged = false;
                }
                else if (firstArray.get(i) > leftNeighbor && firstArray.get(i) > rightNeighbor) {
                    secArray.add(firstArray.get(i) - 1);
                    unchanged = false;
                }
                else {
                    secArray.add(firstArray.get(i));
                }
            }
            secArray.add(tail);
            firstArray.clear();
            firstArray.addAll(secArray);

            if (unchanged)
                break;
        }
        return firstArray;
    }
}


// [6,5,8,6,7,7,3,9,8,8,3,1,2,9,8,3]
