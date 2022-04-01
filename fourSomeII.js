const a = [1, 2];
const b = [2, 3];
const c = [1, 3];
const d = [-4, -8];

/************************/ /* 

  [1][2]
  [2][3]
+
  [1][3]
  [-4][-8]
--------------



*/ /*************************/

let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] + b[i] + c[i] + d[i] == 0) {
    count++;
  }
}

console.log(count);
