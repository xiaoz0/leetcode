/**
 * @param {string} s
 * @return {string}
 */
const isPalindromic = (i, j, array) => {
    let flag = true
    for(let z = 0; z < (j- i) / 2; z ++) {
        if (array[i + z] !== array[j-z]) {
            flag = false
            break;
        }
    }

   return flag
  }
  const longestPalindrome = function(s) {
    const array = s.split('')
    if (array.length < 2) return s

    let max = 0
    let index = 0
    const length = array.length

    for(let i = 0; i < length; i++) {
        for(let j= length -1; j > 0; j-- ) {
            if (max >= j - i) break

           if (!isPalindromic(i, j, array)) {
               continue
           }

          max = j - i
          index = i
        }
    }
    return s.substring(index, index + max + 1)
  };
