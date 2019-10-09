function times(x) {

    return (y) =>{
        if (isNaN(x)) {throw 'Numbers only!!'}
        return x*y
    }
}

module.exports = { times };
