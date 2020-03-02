var searchHelper = (nums, target, offset) => {
  let temp = offset // cant pass by ref
  let mdpt = Math.floor(nums.length/2)

  if(target == nums[mdpt])
    return mdpt + temp

  if(nums.length == 1)
    return -1

  if(target <= nums[mdpt])
    return searchHelper(nums.slice(0, mdpt), target, temp)

  if(target > nums[mdpt]) {
    temp  += mdpt
    return searchHelper(nums.slice(mdpt, nums.length), target, temp)
  }
}

var search = (nums, target) => {
  if(nums.length == 0)
    return -1

  let offset = 0

  return searchHelper(nums, target, offset)
};
