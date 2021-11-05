const init = [36, 44, 23, 39, 48, 56, 38, 14, 12, 0];
const out = [12, 16, 21, 24, 18, 33, 94, 60, 10, 15];

function maxOccupancyInTheClub(incoming, outgoing) {
  let occupancy = 0;
  const res = [];
  let bonus = 0
  let maxOcc = 0;

  for (let i = 0; i < incoming.length; i++) {
    res[i] = occupancy = occupancy + incoming[i] - outgoing[i];
  }

  bonus = res.indexOf(122) + 7
  maxOcc = Math.max(...res);
  console.log("The max occupancy is " + maxOcc + " people and it happened at " + bonus  + "am")

  //return maxOcc
}

maxOccupancyInTheClub(init, out);

