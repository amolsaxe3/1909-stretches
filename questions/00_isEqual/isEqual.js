function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  console.log ('obj1===>',obj1)
  console.log ('obj2===>',obj2)
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  console.log ('arr1===>',arr1)
  console.log ('arr2===>',arr2)

  if (arr1 === undefined && arr2 === undefined) {return true}
  // check 1 for the length of these properties
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    let propName = arr1[i]
    console.log('propName',propName)
    console.log('obj1[propName]'+obj1[propName])
    console.log('obj2[propName]'+obj2[propName])

    if (obj1[propName] !== obj2[propName]){// compare the values
      return false
    }
  }

  return true
}

module.exports = { isEqual };
