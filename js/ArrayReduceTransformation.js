/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    val = init;
    nums.forEach((item) => { val = fn(val, item) });
    return val
};