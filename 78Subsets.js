/**
 * @param {number} start
 * @param {number[]} curr
 * @param {number[]} nums
 * @param {number[][]} resultSet
 */
var backtrack = (start, curr, nums, resultSet, k, n) => {
    // 1. finish condition, i.e. if list is full
    if (curr.length == k) resultSet.push(curr.slice())

    // 2. fill (do work)
    for (let i = start; i < nums.length; i++) {
        // add to current combination
        curr.push(nums[i])
        // use next numbers to fill the set
        backtrack(i + 1, curr, nums, resultSet, k, n)

        // 3. backtrack
        curr.pop() 
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    n = nums.length
    let resultSet = []
    let currentSet = []
    for (k = 0; k < n + 1; ++k) {
        backtrack(0, currentSet, nums, resultSet, k, n);
    }

    return resultSet
};
