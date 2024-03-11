/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    filteredArr = [];
    arr.forEach((item, i) => {
        if(Boolean(fn(item,i))===true)
            filteredArr.push(item);
    })
    return filteredArr;
 };