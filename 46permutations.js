
/**
 * @param {number} sz
 * @param {number[]} path
 * @param {number[][]} results
 * @param {number} first
 * @return {number[][]}
 */
var backtrack = (sz, path, results, first) => {
  // 1. we are at the end of the list
  if (first == sz) {
    results.push(path.slice())
  } 

  for (let i = first; i < sz; i++) {
    const element = path[i];
    // swap first and next
    let temp = path[i]
    path[i] = path[first]
    path[first] = temp

    // use next integers to complete perm
    backtrack(sz, path, results, first + 1)
    
    // backtrack, reverse last decision in this case
    temp = path[i]
    path[i] = path[first]
    path[first] = temp
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
  let results = []
  let sz = nums.length
  backtrack(sz, nums, results, 0)
  return results
}
