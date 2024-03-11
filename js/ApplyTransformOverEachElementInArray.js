/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    newArray = [];
    arr.forEach((item, i) => newArray.push(fn(item, i)));
    return newArray;
};