class Solution {
public:
    int longestPalindromeSubseq(string s) {
      string t = s;
      reverseStr(t);
      int n = s.length();
      int m = n;

      int L[m + 1][n + 1];
      for (int i = 0; i < m+1; ++i) 
      {
        for (int j = 0; j < n+1; ++j)
        {
          L[i][j] = 0;
        }
      }
        
      for (int i = 1; i <= m; ++i) 
      {
        for (int j = 1; j <= n; ++j)
        {
          if (s[i-1] == t[j-1])
            L[i][j] = 1 + L[i-1][j-1];
          else
            L[i][j] = max(L[i-1][j] , L[i][j-1] );
        }
      }
      // L[m,n] is the length of a LCS
         
       return L[m][n];
    }
    
    // Function to reverse a string 
    void reverseStr(string& s) 
    { 
        int n = s.length(); 
      
        // since we swap divide by two
        for (int i = 0; i < n / 2; i++) 
            swap(s[i], s[n - i - 1]); 
    } 
};