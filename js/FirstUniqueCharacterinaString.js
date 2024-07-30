/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // nested for loops to search through the word for every letter
    for(let i = 0; i < s.length; i++) {
    // identifier to hold unique status, default to true to assume a char is unique
    unique = true
        for(let p = 0; p < s.length; p++) {
            // skip matching indices
            if(p==i) {
                continue
            } else {
                // mark nonunique if there is a character match
                if(s[p]==s[i]) {
                    unique=false;
                    break
                }
            }
        }
        // if unique, return index
        if(unique==true) { return(i) }
    }
    // return -1 if all nonunique, worstcase runtime O(n^2)
    return(-1)
};
