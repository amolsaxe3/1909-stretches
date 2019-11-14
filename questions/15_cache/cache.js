
// different between arg passed in calling function with ...arg is collecting everything
// if in the function call below if ...arg is done its destructuring...

function cache(cb) {

    if (typeof cb !== "function"){
        throw new Error("Input must be a function.");
    } else {

        const memo = {};

        return  function cashedAdder(arg) {
            if(arg in memo){
                return memo[arg];
            } else {
                memo[arg] = cb(arg);
                return memo[arg];
            }

        };
    }

}

module.exports = { cache };
