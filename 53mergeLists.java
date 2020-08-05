import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) {
            return intervals;
        }


        ArrayList<int[]> intervalList = new ArrayList<>(Arrays.asList(intervals));
        intervalList.sort((x, y) -> x[0] - y[0]);

        int slowRunner = 0;
        while (slowRunner < intervalList.size() - 1) {
            int fastRunner = slowRunner + 1;
            while (fastRunner < intervalList.size()) {
                // check if one interval is inside the other, then delete
                if (intervalList.get(slowRunner)[0] <= intervalList.get(fastRunner)[0] && intervalList.get(fastRunner)[1] <= intervalList.get(
                        slowRunner)[1]) {
                    intervalList.remove(fastRunner);
                    continue;
                }
                // check and combine
                else if (intervalList.get(fastRunner)[0] <= intervalList.get(slowRunner)[1]) {
                    // combine
                    intervalList.get(slowRunner)[1] = intervalList.get(fastRunner)[1];

                    // delete old item from list
                    intervalList.remove(fastRunner);
                    continue;
                }
                fastRunner++;
            }
            slowRunner++;
        }

        int[][] intervalArray = new int[intervalList.size()][];
        for (int i = 0; i < intervalList.size(); i++) {
            intervalArray[i] = intervalList.get(i);
        }

        return intervalArray;
    }
}
