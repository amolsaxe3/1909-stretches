
function cache(fn) {
    let retFunc = (arg) => {
        
    }
    if (typeof fn === 'function'){
 

        return retFunc;
    } else {
        throw 'Input must be a function.'
    }

}

module.exports = { cache };
