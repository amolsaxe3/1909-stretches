// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

// class GlobalArray { 
//     constructor(){
//         this.array = [];
//     }
//     Add(item) {
//         this.array.push(item);
//     }
//     Get(){
//         return this.array;
//     }

//     next() {
//         return console.log (this.array[i]);
//     }
// }

Array.prototype.next = function() {
    return console.log(this[++this.current]);
};

// no export statement required
