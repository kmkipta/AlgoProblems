/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {number}  
 * returns size of pal
 */
const expandFromMiddle = (s, left, right) => {
  if (s == null || left > right) return 0
  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
    left--
    right++
  }

  return right - left - 1
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s == null || s.length == 0) return ''

  let start = 0,
    end = 0

  for (let i = 0; i < s.length; i++) {
    // handle 2 cases; one odd and one even
    let len1 = expandFromMiddle(s, i, i) // use for "racecar"
    let len2 = expandFromMiddle(s, i, i + 1) // use for "abba"
    // keep track of lengths
    let len = Math.max(len1, len2)
    // found a new max!
    if (len > end - start) {
      start = (i - ((len - 1) / 2))
      end = (i + len / 2)
    }

  }

  return s.substring(start, end + 1)
}