// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let isAnagram  = false;

  str1 = str1.split('');
  console.log ("str1====>",str1)
  str1 = str1.sort();
  console.log ("str1====>",str1)
  str1 = str1.join('');
console.log ("str1====>",str1)

  str2 = str2.split('');
  console.log ("str2====>",str2)
  str2 = str2.sort();
  console.log ("str2====>",str2)
  str2 = str2.join('');
  console.log ("str2====>",str2)

  if (str1 === str2) {
    isAnagram = true;
  }

  return isAnagram;
};

module.exports = { checkAnagrams };
