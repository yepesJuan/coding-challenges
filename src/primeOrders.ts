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
    const isPrimeOrder = !orderInfo.flag; // Prime if the second part is NOT a number
    const orderId = orderInfo.id;
    const metadata = orderInfo.metadata;

    if (isPrimeOrder) {
      primeOrders.push({ order, metadata, orderId });
    } else {
      nonPrimeOrders.push({ order, metadata, orderId });
    }
  }

  // Sort prime orders by metadata and then by orderId (if metadata is the same)
  primeOrders = primeOrders.sort((a, b) => {
    if (a.metadata === b.metadata) {
      return a.orderId.localeCompare(b.orderId);
    }
    return a.metadata.localeCompare(b.metadata);
  });

  // Concatenate the sorted prime orders with non-prime orders in original order
  return primeOrders
    .map((o) => o.order)
    .concat(nonPrimeOrders.map((o) => o.order));
}

function isPrime(order: string) {
  const orderSubString = order.split(" ");
  const id = orderSubString[0];
  const metadata = orderSubString.slice(1).join(" ");
  const flag = /^\d+$/.test(orderSubString[1]); // Check if the second part is a number

  return { flag, id, metadata };
}

const sortedOrders = sortOrders(orders);
console.log(sortedOrders);
