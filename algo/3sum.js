function twoSum(nums, start, target) {
  const len = nums.length;
  let l = start;
  let r = len - 1;

  while (l < r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else {
      res.push(nums[l], nums[r]);
      while (l < r && nums[l] === nums[l + 1]) {
        l++;
      }
      while (l < r && nums[r] === nums[r - 1]) {
        r--;
      }
      l++;
      r--;
    }
  }
}
function threeSum(params) {
    
}