const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {

  return sales.reduce((acc,cur)=>{
    if(acc === undefined) return {amount: cur.id, productId: cur.productId}

    if (cur.amount > acc.amount) return {amount: cur.id, productId: cur.productId}

  }, {})

}

module.exports = { bestSales, sales };
