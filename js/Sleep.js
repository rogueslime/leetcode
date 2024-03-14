/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return promise = new Promise(res => setTimeout(res, millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */