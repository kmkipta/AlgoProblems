/**
 * @param {number[]} nums
 * @return {boolean}
 * RT: O(1) * n 
 */
var containsDuplicate = (nums) => {
  // use Set
  const charSet = new Set()
  
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if(charSet.has(n)) return true
    else charSet.add(n)
  }

  return false
};