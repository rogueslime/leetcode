/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let promiseSum = 0;
    promiseSum += await(promise1);
    promiseSum += await(promise2);
    return promise3 = new Promise(resolve => resolve(promiseSum))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */