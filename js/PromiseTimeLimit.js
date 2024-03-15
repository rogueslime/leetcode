/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {

    return async function timedFn(...args) {
        return new Promise((resolve, reject) => {
            var timedFn = fn(...args)
            setTimeout(() => {
                reject("Time Limit Exceeded")
            },t)
            timedFn.then((fnReturn) => {
                resolve(fnReturn)
            }).catch((error) => { reject(error) })
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */