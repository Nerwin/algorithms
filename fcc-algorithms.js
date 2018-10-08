/* 
*  ############################################################
*  ### FreeCodeCamp algorithms with functionnal programming ###
*  ############################################################
*/

/* 
* ## Seek and Destroy ##
* You will be provided with an initial array (the first argument in the destroyer function), 
* followed by one or more arguments. 
* Remove all elements from the initial array that are of the same value as these arguments. 
*/

function destroyer(arr, ...args) {
  return arr.filter(val => !args.find( x => x === val));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* 
* ## Sum All Numbers in a Range ##
* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
* The lowest number will not always come first.
*/

function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
  }
  return sum;
}
sumAll([5, 10]);

/* 
* ## Diff Two Arrays ##
* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
* In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return arr1.filter(val => !arr2.includes(val)).concat(arr2.filter(val => !arr1.includes(val)))
}
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

/* 
* ## Wherefore art thou ##
* Make a function that looks through an array of objects (first argument) and returns an array of all objects 
* that have matching name and value pairs (second argument). 
* Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => {
    return sourceKeys.every(key => { 
      return obj.hasOwnProperty(key) && obj[key] === source[key];
     });
  });
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
