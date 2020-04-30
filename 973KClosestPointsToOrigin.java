// https://leetcode.com/explore/interview/card/amazon/79/sorting-and-searching/2996/
// heap Complexity: O( log N )
import java.lang.*;

class Solution {
    public int[][] kClosest(int[][] points, int K) {
        PriorityQueue<KClass> pQueue = new PriorityQueue<KClass>(K, new KClassComparator());
        var result = new int[K][2];
        var i = 0; // maintain result index
        for (int[] is : points) {
            var first = is[0];
            var second = is[1];
            var distance = Math.sqrt(Math.pow(first, 2) + Math.pow(second, 2.0));

            KClass toAdd = new KClass(distance, is);
            pQueue.add(toAdd);
        }
        
        while (i < K) {
            var tempKclass = pQueue.poll();
            result[i][0] = tempKclass.coordinates[0];
            result[i][1] = tempKclass.coordinates[1];
            i++;
        }
        return result;
    }
}

class KClass {
    public double distance;
    public int[] coordinates;

    public KClass(double distance, int[] coordinates) {
        this.distance = distance;
        this.coordinates = coordinates;
    }
}

class KClassComparator implements Comparator<KClass> {
    public int compare(KClass k1, KClass k2) {
        if (k1.distance < k2.distance) {
            return -1;
        } else if (k1.distance > k2.distance) {
            return 1;
        }
        return 0;

    }
}
