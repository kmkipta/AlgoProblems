class Solution {
    public void rotate(int[][] matrix) {
        int maxLength = matrix[0].length;

        // transpose first (swap)
        for (int r = 0; r < maxLength; r++) {
            for (int c = r; c < maxLength; c++) {
                int tmp =  matrix[c][r];
                matrix[c][r] = matrix[r][c];
                matrix[r][c] = tmp;
            }
        }

        // reverse second
        for (int r = 0; r < maxLength; r++) {
            int b = maxLength - 1;
            // since we are swapping need to cut in half
            for (int c = 0; c < maxLength / 2; c++) {
                int tmp = matrix[r][c]; // end of row
                matrix[r][c] = matrix[r][b];
                matrix[r][b] = tmp;
                b--;
            }
        }
    }

}
