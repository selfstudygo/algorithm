// https://leetcode.com/problems/range-sum-query-immutable/
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
    const upToSum = [0];
    let i = 1;
    while(i<= nums.length) {
        upToSum[i] = upToSum[i-1] + nums[i-1];
        i++;
    }
    this.upToSum = upToSum;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.upToSum[j+1] - this.upToSum[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */