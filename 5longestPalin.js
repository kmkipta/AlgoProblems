/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {number}  
 * returns size of pal
 */
const expandFromMiddle = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1
    right += 1
  }
  // slice the qualified substring from the second last iteration
  return s.slice(left + 1, right)
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s == null || s.length == 0) return ''
  let longest =''

  for (let i = 0; i < s.length; i++) {
    // handle 2 cases; one odd and one even
    let current1 = expandFromMiddle(s, i, i) // use for "racecar"
    let current2 = expandFromMiddle(s, i, i + 1) // use for "abba"
    // keep track of lengths
    let len = Math.max(current1.length, current2.length)
    // found a new max!
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }

  return longest
}