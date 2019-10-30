// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {

    let str = "",prevNumber=1,i,value=n;
for(i=0;i<value;i++){
  str = "";j=0;
  while(j<= i){
        str = str + "    " + prevNumber;
        j++;
        prevNumber++;
}
//console.log(str);
}
};

module.exports = { floydsTriangle };
