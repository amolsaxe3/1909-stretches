function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
<<<<<<< HEAD
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);

  if (arr1 === undefined && arr2 === undefined) {return true}
  // check 1 for the length of these properties
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    let propName = arr1[i]
    if (obj1[propName] !== obj2[propName]){// compare the values
      return false
    }
  }
  return true
=======
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
}

module.exports = { isEqual };
