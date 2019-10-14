// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let isAnagram  = false;
  if (str1 === str2) {
    isAnagram = true;
  }

  str1 = str1.split('');
  str1 = str1.sort();
  str1 = str1.join('');

  str2 = str2.split('');
  str2 = str2.sort();
  str2 = str2.join('');

  if (str1 === str2) {
    isAnagram = true;
  }

  return isAnagram;
};

module.exports = { checkAnagrams };
