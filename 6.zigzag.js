/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const getLostionIndex = (index, mod) => {
  const symmetryMod = 2 * mod - 2
  const symmetryRemainder = (index % symmetryMod) || symmetryMod
  if (symmetryRemainder <= mod) {
    return symmetryRemainder
  }
  return mod - (symmetryRemainder) % mod
}

var convert = function(s, numRows) {
 if (numRows === 1) {
    return s
  }

  let outputArr = []

  const array = s.split('')

  for(let i = 0; i< array.length; i++) {
      const index = getLostionIndex(i+1, numRows)
      outputArr[index -1] = (outputArr[index -1] || '') + array[i]
  }

  return outputArr.join('')
};
