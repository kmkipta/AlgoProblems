class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        Do not return anything, modify nums1 in-place instead.
        """
        t1 = nums1[:m]
        nums1[:] = [] # empty the set
        i  = j = 0
        while i < m and j < n:
            if t1[i] < nums2[j]:
                nums1.append(t1[i])
                i += 1
            else:
                nums1.append(nums2[j])
                j += 1
        

        if i < m:
            nums1.extend(t1[i:m])
        if j < n:
            nums1.extend(nums2[j:n])

sol = Solution()
nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
m = n = 3
sol.merge(nums1, m, nums2, n)
print(nums1)

#Input:
#nums1 = [1,2,3,0,0,0], m = 3
#nums2 = [2,5,6],       n = 3

#Output: 
# [1,2,2,3,5,6]