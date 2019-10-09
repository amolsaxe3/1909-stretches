function times(x) {
   if (typeof x !== 'number') throw 'Numbers only!';

    return (y) => x*y;
}

module.exports = { times };
