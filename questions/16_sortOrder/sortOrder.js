/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, sortOrder, name) {

    //let retArr = [];

    // let populateArr = [];
    // data.map (obj => {
    //     populateArr.push(obj[name]);
    // })

    // console.log('populateArr', populateArr)

    // return populateArr.sort();

    data.sort((a, b) => {
        return a[sortOrder] - b[sortOrder];
    })
        .map(element => {
            return element[key];
        });
}

module.exports = { sortOrder };
