class Solution {
public:
    int reverse(int x) {
        string fs = to_string(x);
        string rs = "";
        
        for(size_t i = fs.length(); i > 0; i--)
        {
          rs += fs.at(i);
        }
        int ri = stoi(rs);
        return ri;
    }
};