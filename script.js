'use strict';
/////////finding prime numbers (1-100)
const isprime = (num) => {
  if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return 0;
      }
    }
    return 1;
  }
};
let count = 0;
while (count <= 100) {
  if (isprime(count)) {
    console.log(count);
  }
  count++;
}

/////////////finding secMax/////////////////////
const num = (secMax) => {
  if (secMax.length != 3) {
    0;
  } else {
    const arra = secMax.sort((a, b) => b - a);
    const res = arra[1];
    console.log(res);
  }
};
num([-5, 9, 10]);
