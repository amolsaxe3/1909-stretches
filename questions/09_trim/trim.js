const trim = obj => {
     let retObj = {};
    // for (let key in obj) {

    //     if (obj[key] !== null && !obj[key] !== undefined) {
    //         console.log("obj.key===>",obj.key)
    //         console.log("retObj--->",retObj)
    //         retObj[key] = obj[key];
    //         console.log("retObj-after-->",retObj)
    //     }
       
    // }
    // console.log(retObj)
    // return retObj;

    Object.keys(obj).forEach( key => {
        if (obj[key] !== null && !obj[key] !== undefined) {
            retObj[key] = obj[key]
        }
    })
    return retObj;
};

module.exports = { trim };
