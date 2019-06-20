/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *  Search in Rotated Sorted Array.
 */
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while(left <= right) {
        var mid = Math.ceil(left + (right - left)/2);
        if (nums[mid] == target) return mid;
        if (nums[left] == target) return left;
        if (nums[right] == target) return right;

        // check if right is sorted (one side must be sorted)
        if (nums[mid] <= nums[right]) {
            // binary search
            if (nums[mid] < target && nums[right] >= target) // on right
                left = mid + 1;
            else // on left
                right = mid - 1;
        } else { // left side is sorted
            if (nums[mid] > target && nums[left] <= target)
                right = mid - 1;
            else // on right
                left = mid + 1;
        }
    }
    return -1;
};

var nums = [7,8,1,2,3,4,5,6];
var target = 2;
console.log(search(nums, target));
