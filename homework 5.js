// 1) Given a number. Write a recursive function that reverse the number. Return the new
// number.

// 1. Input / 2                     output / 2
// 2. Input / 13                    output / 31
// 3. Input / 815796                output / 697518

function reverseStr(s) {
  if (s.length === 0) {
    return "";
  }
  return reverseStr(s.slice(1)) + s[0];
}
function reverseNum(n) {
  return reverseStr(String(n));
}
console.log(reverseNum(13));

// 2) Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two.

// 3) Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use str.substring(startIndex, endIndex),
// str.substr(startIndex, length) )

function countInstances(string, word) {
  return string.split(word).length - 1;
}
console.log(countInstances("Facebook looks odd", "ook"));
console.log(countInstances("Are var far shared?", "ar"));

// 4) Given a string, compute recursively (no loops) a new string where all appearances of "pi"
// have been replaced by "3.14".

function replacePi(str) {
  if (str.length <= 1) {
    return str;
  } else if (str[0] === "p" && str.length >= 2 && str[1] === "i") {
    return "3.14" + replacePi(str.substring(2, str.length));
  }
  return str[0] + replacePi(str.substring(1, str.length));
}

console.log(replacePi("Picsart pipelines"));
console.log(replacePi("picturespicturespictures"));

// 5) Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concat arrays).

function flatten(array, newArr = []) {
  let firstEl = array[0];
  let rest = array.slice(1);
  if (array.length === 0) {
    return newArr;
  } else if (Array.isArray(firstEl)) {
    return flatten(firstEl.concat(rest), newArr);
  } else {
    newArr.push(firstEl);
  }
  return flatten(rest, newArr);
}

console.log(flatten([1, [3, 4, [1, 2]], 10]));
console.log(flatten([14, [1, [[[3, []]], 1], 0]]));

// 6) Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.
