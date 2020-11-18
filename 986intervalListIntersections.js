/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 * RT: O(M + N)
 */
const intervalIntersection = (A, B) => {
  const results = []
  let i= 0, j = 0
  while (i < A.length && j < B.length) {
    // here we get the intersection of the interval
    const lo = Math.max(A[i][0], B[j][0])
    const hi = Math.min(A[i][1], B[j][1])

    if (lo <= hi) {
      results.push([lo, hi])
    }

    // remove the interval that has passed
    if (A[i][1] < B[j][1]) {
      i++
    } else {
      j++
    }
  }    
  return results
};
