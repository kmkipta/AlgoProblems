class Scratch {
    private char[][] BOARD;
    private int ROWS;
    private int COLS;

    public static void main(String[] args) {
        
    }

    /*
    * 1. loop through until we find a letter
    * 2. check vertical and horizontal
    *
    * */
    public boolean exist(char[][] board, String word) {
        var found = false;
        this.BOARD = board;
        this.ROWS = board.length;
        this.COLS = board[0].length;

        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                if (board[i][j] == word.charAt(0)) {
                    return dfs(i, j, word, 0);
                }
            }
        }
        return found;
    }

    public boolean dfs(int row, int col, String word, int letterIdx) {
        /* Step 1). check the bottom case. */
        if (letterIdx >= word.length())
            return true;

        /* Step 2). Check the boundaries. */
        if (row < 0 || row == this.ROWS || col < 0 || col == this.COLS
                || BOARD[row][col] != word.charAt(letterIdx))
            return false;

        /* Step 3). explore the neighbors in DFS */
        boolean ret = false;
        // mark the path before the next exploration
        BOARD[row][col] = '#';

        int[] rowOffsets = {0, 1, 0, -1};
        int[] colOffsets = {1, 0, -1, 0};
        for (int d = 0; d < 4; ++d) {
            ret = dfs(row + rowOffsets[d], col + colOffsets[d], word, letterIdx + 1);
            if (ret)
                break;
        }

        /* Step 4). clean up and return the result. */
        BOARD[row][col] = word.charAt(letterIdx);
        return ret;
    }
}
