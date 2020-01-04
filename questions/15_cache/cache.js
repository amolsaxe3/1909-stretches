
module.exports = { cache };
//Russell's answer
function cache(cb) {
  if (typeof cb !== "function") throw Error("Input must be a function.");
  const memo = {};
  return function(...num) {
    //... gathers everthing that could be passed in and putting in array rest syntax
    console.log("memo", memo);

    if (num in memo) {
      //memo[num] !== undefined
      return memo[num];
    } else {
      console.log("num as array", num);
      console.log("num as args", ...num);
      /*key is stringified*/ memo[num] = cb(...num); //function invokation each argument passed in as separate num spread
      return memo[num];
      //adeed new comments
      // lets try checking it in
    }
  };
}


// // different between arg passed in calling function with ...arg is collecting everything
// // if in the function call below if ...arg is done its destructuring...

// // function cache(cb) {

// //     if (typeof cb !== "function"){
// //         throw new Error("Input must be a function.");
// //     } else {

// //         const memo = {};

// //         return  function cashedAdder(arg) {
// //             if(arg in memo){
// //                 return memo[arg];
// //             } else {
// //                 memo[arg] = cb(arg);
// //                 return memo[arg];
// //             }

// //         };
// //     }

// // }

// // module.exports = { cache };

// module.exports = { cache };
// //Russell's answer
// function cache(cb) {
//   if (typeof cb !== "function") throw Error("Input must be a function.");
//   const memo = {};
//   return function(...num) {
//     //... gathers everthing that could be passed in and putting in array rest syntax
//     console.log("memo", memo);

//     if (num in memo) {
//       //memo[num] !== undefined
//       return memo[num];
//     } else {
//       console.log("num as array", num);
//       console.log("num as args", ...num);
//       /*key is stringified*/ memo[num] = cb(...num); //function invokation each argument passed in as separate num spread
//       return memo[num];
//     }
//   };
// }