const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let arrRet = [];
  for (let i = 0; i < n; i++){
    if(typeof func === 'function'){
    arrRet.push(func());}
    else {
      arrRet.push([]);
    }
    }
  return arrRet;
};

module.exports = { repeater };
