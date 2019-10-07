/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

return arr.reduce((acc, cur) => {
    if(cur%num === 0 && cur > acc){
        acc = cur
    }    
    return acc
},null)
}
module.exports = { largestDivisible };
