const images = [
  { timestamp: 1344462950 },
  { timestamp: 1344462930 },
  { timestamp: 1255122560 },
  { timestamp: 1344451931 },
  { timestamp: 1299975445 },
];

// 1. sort the image in ascending order
images.sort((a, b) => {
  return a.timestamp - b.timestamp;
});

// 2. group by month

// times * 1000 to convert seconds to milliseconds
const date = new Date(images[1].timestamp * 1000);
console.log({ date });

const month = date.getMonth();
console.log({ month });

// 3. group by day

const day = date.getDate();
console.log({ day });
const year = date.getFullYear();
console.log({ year });

let a = 1;
let b = true;
let c = a && b;

if (a && b) {
  console.log("lol");
  console.log(c);
}
