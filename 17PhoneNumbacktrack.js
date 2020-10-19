const numberMap = new Map()
numberMap.set('2', 'abc')
numberMap.set('3', 'def')
numberMap.set('4', 'ghi')
numberMap.set('5', 'jkl')
numberMap.set('6', 'mno')
numberMap.set('7', 'pqrs')
numberMap.set('8', 'tuv')
numberMap.set('9', 'wxyz')


// params: string, string
var backtrack = (combination, nextDigits, resultSet) => {
  // if out of room or another base case
  if (nextDigits.length == 0) {
    // combination is done
    resultSet.push(combination);
  }
  // find decision
  else {
    const digit = nextDigits.substring(0, 1)
    const letters = numberMap.get(digit)
    for (let i = 0; i < letters.length; i++) {
      // get next letter
      letter = numberMap.get(digit).substring(i, i + 1);
      // append the current letter to the combination
      // and proceed to the next digits
      backtrack(combination + letter, nextDigits.substring(1), resultSet);
    }
  }
  // eject decision
  //
}

var letterCombinations = function(digits) {
    let resultSet = []
    if (digits.length != 0)
        backtrack('', digits, resultSet)
    return resultSet
};