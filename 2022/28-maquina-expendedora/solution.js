const getProduct = (money, product) => {
  const products = [
    { name: 'Coca Cola', price: 80 },
    { name: 'Fanta', price: 120 },
    { name: 'Cerveza', price: 200 },
  ];
  const change = [200, 100, 50, 10, 5];

  if (!money.length) return 'no money inserted';

  const validMoney = money.every((m) => change.includes(m));
  if (!validMoney) return 'invalid money';

  const productPrice = products[product]?.price;
  if (!products[product]) return 'product not found';

  const totalMoney = money.reduce((acc, curr) => acc + curr, 0);
  if (totalMoney < productPrice) return 'not enough money';

  const changeToReturn = totalMoney - productPrice;
  const changeArray = [];

  if (changeToReturn > 0) {
    let changeToReturnAux = changeToReturn;
    for (let i = 0; i < change.length; i++) {
      while (changeToReturnAux >= change[i]) {
        changeArray.push(change[i]);
        changeToReturnAux -= change[i];
      }
    }
  }
  return { product: products[product].name, change: changeArray };
};

module.exports = getProduct;
