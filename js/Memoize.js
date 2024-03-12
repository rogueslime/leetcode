/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = (args);
        if (cache[key] === undefined) {
            return (cache[key] = fn(...args));
        }
        return cache[key];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */