const orders = [
  "zld 93 12",
  "fo kindle book",
  "10a echo show",
  "17g 12 25 6",
  "ab1 kindle book",
  "125 echo dot second generation",
];

function sortOrders(orders: string[]) {
  let primeOrders = [];
  let nonPrimeOrders = [];

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const orderInfo = isPrime(order);
    const isPrimeOrder = orderInfo.flag;
    const orderId = orderInfo.id;
    const metadata = orderInfo.metadata;

    if (isPrimeOrder) {
      primeOrders.push({ order, metadata, orderId });
    } else {
      nonPrimeOrders.push({ order, metadata, orderId });
    }
  }

  primeOrders = primeOrders.sort((a, b) => {
    if (a.metadata === b.metadata) {
      return 0;
    }
    return a.metadata < b.metadata ? -1 : 1;
  });

  return primeOrders.concat(nonPrimeOrders);
}

function isPrime(string: string) {
  const orderSubString = string.split(" ");
  const id = orderSubString[0];
  const metadata = orderSubString.slice(1).join(" ");
  const flag = /^\d+$/.test(orderSubString[1]); // Check if the second part is a number

  return { flag, id, metadata };
}

const sortedOrders = sortOrders(orders);
console.log(sortedOrders);
