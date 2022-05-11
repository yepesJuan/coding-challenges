// Club opened at 7pm
//  ------>   7   8   9   10  11  12   1   2   3  4
const init = [36, 44, 23, 39, 48, 56, 38, 14, 12, 0];
const out = [12, 16, 21, 24, 18, 33, 94, 60, 10, 15];

function maxOccupancyInTheClub(incoming, outgoing) {
  const res = [];
  let occupancy = 0;

  for (let i = 0; i < incoming.length; i++) {
    occupancy = occupancy + incoming[i] - outgoing[i];
    res.push(occupancy);
  }

  const time = res.indexOf(122) + 7;
  const maxOccupancy = Math.max(...res);
  console.log(
    "The max occupancy is " +
      maxOccupancy +
      " people and it happened at " +
      time +
      "am"
  );
}

maxOccupancyInTheClub(init, out);
