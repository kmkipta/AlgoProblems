const helper = (index, s) => {
    if (index >= s.length)
        return 
    else {
        let last = s.pop()
        s.splice(index, 0, last)
        index += 1
        helper(index, s)
    }
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length <= 1)
        return

    helper(0, s)
};

let st = ['h','e','l','l','o']
reverseString(st)
console.log(st)
