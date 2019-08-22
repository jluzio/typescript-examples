import Big from "big.js";

type PreciseNumberType = number | string | Big;

const n1: PreciseNumberType = 1;
const n2: PreciseNumberType = "2";
const n3: PreciseNumberType = new Big(2);

console.log("numbers", {
  n1,
  n2,
  n3
});

console.log("numbers.json", {
  n1: JSON.stringify(n1),
  n2: JSON.stringify(n2),
  n3: JSON.stringify(n3)
});

const numbers = [n1, n2, n3];
let sum = Big(0);
numbers.forEach(n => {
  sum = sum.add(n);
});

console.log("sum", { sum: sum.toJSON() });
