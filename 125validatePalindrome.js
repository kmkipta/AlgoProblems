/**
 * @param {string} s
 * @return {boolean}
 * 0N
 */
const isPalindrome = (s) => {
    let ss = ''
    for (const c of s) {
        if (/[A-Za-z0-9]/.test(c)) {
            ss += c.toLowerCase()
        }
    }

    const reverse = ss.split('').reverse().join('')
    return ss == reverse
};
