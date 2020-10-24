/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = (nums) => {
    if (nums.length == 0) return 0
    
    // two pointers
    let p1 = 0, p2 = 1
    while (p1 != nums.length - 1) {
        if (nums[p1] == nums[p2]) {
            nums.splice(p2,1)
        } else {
            p1++
            p2++
        }
    }
    return nums.length
};