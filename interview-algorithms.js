/*
* ## Introducing Glob Matching ##
* The exercise is that, given a pattern and a str, determine if str matches pattern. 
* The only special character you need to support is the wildcard character '*', which matches any number of characters, including no characters.
* Note : __You are not allowed to use regex__
* For example:
* 
* patternMatches('a*b', 'aabb') returns true
* patternMatches('a*b', 'aabbc') returns false
* patternMatches('ab*', 'abcd') returns true
* patternMatches('a*b*c', 'abc') returns true
* patternMatches('a*b*c', 'aaabccc') returns true
* patternMatches('a*b*c', 'abca') returns false
*/

function patternMatches(pattern, str) {
  // Implement code
  return true
};
patternMatches('a*b', 'aabb');


/*
  Print all missing numbers from a given array
*/

function printMissingNumber(arr, lastNumber) {
  let numFlag = 1
  for (let index = 0; numFlag <= lastNumber; numFlag++) {
    if (numFlag !== arr[index]) {
      console.log(numFlag);
    } else {
      index++;
    }
  }
};

printMissingNumber([1, 2, 3, 4, 5, 7, 8, 10], 12); // Output : 6, 9, 11, 12
