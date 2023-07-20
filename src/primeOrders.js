// Real Interview Question, not done
const orders = [
  "zld 93 12",
  "fo kindle book",
  "10a echo show",
  "17g 12 25 6",
  "ab1 kindle book",
  "125 echo dot second generation",
];

function sortOrders(orders) {
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

  console.log({ primeOrders });
  // console.log({ nonPrimeOrders });

  primeOrders = primeOrders.sort((a, b) => {
    if (a.metadata === b.metadata) {
      return 0;
    }
    return a < b ? -1 : 1;
  });
  console.log({ primeOrders });
  // nonPrimeOrders = nonPrimeOrders.sort((a, b) => {
  //   if (a[1] === b[1]) {
  //     return 0;
  //   }
  //   return a[1] < b[1] ? -1 : 1;
  // });
  return primeOrders.concat(nonPrimeOrders);
}

function isPrime(string) {
  let orderSubString = string.split(" ");
  for (let i = 1; i < orderSubString.length; i++) {
    if (Number(orderSubString[i])) {
      return {
        flag: false,
        id: orderSubString[0],
        metadata: orderSubString.shift().join(),
      };
    }
  }
  return {
    flag: true,
    id: orderSubString[0],
    metadata: orderSubString.shift().join(),
  };
}

// function getMetadata(metadata) {
//   const data = [];
//   for (let i = 0; i < metadata.length; i++) {
//     console.log(metadata[i].split(" "));
//   }
// }

sortOrders(orders);
