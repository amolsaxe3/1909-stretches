const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];
function query(arr, obj) {

  let allKeys = Object.keys(obj);
  console.log(allKeys);
  keyExists = true

  let accumulator = arr.reduce ((acc,curr)=> {

    for (let i = 0; i < allKeys; i++)
    {
      if ((allkeys[i] in curr)) {  if (obj[allKeys[i]] === curr[allKeys[i]) {keyExists = true;}}
         else keyExists = false;
    }
    if (keyExists){
      acc.push(curr)
    }
    return acc;
  },[])
    return accumulator;
}


module.exports = { query, items };
// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]


