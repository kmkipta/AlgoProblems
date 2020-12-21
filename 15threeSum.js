/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    if (nums.length < 3) return []
    const sorted = nums.sort()
    let results = []

    // given num i, we need to find the sum of remaining nums that sum to -i
    for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
        let lo = i + 1, hi = nums.length - 1
        // typical lo - hi no need to count swaps
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi]
            if (sum === 0) {
                let path = [nums[i], nums[lo], nums[hi]]
                results.push(path.slice())

                // handle duplicates
                while (lo < hi && nums[lo] === nums[lo - 1])
                    ++lo

            }

            // move pointers
            lo++
            hi--
        }
    }

    let strings = results.map(JSON.stringify)
    let resultSet = new Set(strings)
    return Array.from(resultSet, JSON.parse)
}
