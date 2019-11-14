
function cache(cb) {

    if (typeof cb !== "function"){
        throw new Error("Input must be a function.");
    } else {
        return  function cashedAdder(arg) {
           return cb(arg);
        };
    }

}

module.exports = { cache };
