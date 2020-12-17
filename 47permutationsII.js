/**
 * @param {number[]} nums
 * @return {number[][]}
 * RT: O(N!), in case all nums are unique
 * RS: O(N)
 */
var permuteUnique = function(nums) {
    let results = []
    let path = []
    let countMap = new Map();

    // create a map of counts of all values of nums
    for(let n of nums){
        if (countMap.has(n)) {
            countMap.set(n, countMap.get(n) + 1)
        } else {
            countMap.set(n, 1)
        }
    }

    /**
     * @param {number[]} path
     * @param {number[]} nums
     * @return {number[][]}
     */
    function backtrack(nums, path){
        // done; we have a full path to push
        if (path.length == nums.length){
            results.push(path.slice())
            return
        }

        for (let entry of countMap){
            // k,v pair
            let key = entry[0]
            let value = entry[1]

            if (value == 0) 
                continue;
            
            path.push(key)
            
            // used value; remove
            countMap.set(key, --value)

            // backtrack
            backtrack(nums, path)

            // undo last edit to explore
            path.pop()
            countMap.set(key, ++value)
        }
    }
    backtrack(nums, path)
    return results;
};
