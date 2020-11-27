// https://leetcode.com/problems/house-robber/
const rob = function(nums) {
    if (nums.length < 3 ) {
        return Math.max(nums[0] || 0, nums[1] || 0);
    }
    const r = [nums[0], Math.max(nums[0], nums[1])];
    for (let i=2; i<nums.length; i++) {
        r[i] = Math.max(r[i-2] + nums[i], r[i-1]);
    }
    return r.pop();
};