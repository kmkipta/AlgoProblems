# split semver on delimeter, then fill on missing zeros if necessary.  cast to int.
# Time complexity : O(N+M+max⁡(N,M)), where N and M are lengths of input strings.
# Space complexity : O(N+M) to store arrays v1_arr and v2_arr
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1_arr = version1.split('.')
        v2_arr = version2.split('.')
        max_size = max(len(v1_arr), len(v2_arr))
        i = 0 

        while i < max_size:
            if i >= (len(v1_arr)):
                v1_arr.append("0")
            elif i >= (len(v2_arr)):
                v2_arr.append("0")

            if int(v1_arr[i]) > int(v2_arr[i]):
                return 1
            elif int(v2_arr[i]) > int(v1_arr[i]):
                return -1
            i += 1
        return 0
