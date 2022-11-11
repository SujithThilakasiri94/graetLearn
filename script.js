console.log("connected");

document.write("Hi");

for (let i = 0; i <= 21; i += 2) {
  console.log(i);
}

let x = "12";
let y = 5;

let fruit = ["Apple", "Orange", "Banana"];
fruit.forEach((items) => console.log(items));

let vegetables = ["tomato", "potato", "beetroot"];

let i = 1;
do {
  console.log("he hee " + i);
  i++;
} while (i <= 5);
console.log("value of i : " + i);

console.log(2 ** 3);

var a = 8,
  b = 4;
console.log(a << b); //8*2*2*2*2
console.log(a >> b);

a = 10;
console.log(a << b); //10*2*2*2*2 = 10 * 2 ^ 4

a = 120;
console.log(a >> b);

const c = "5",
  d = 5;
if (c == d) {
  console.log(true);
} else {
  console.log(false);
}

if (c === d) {
  console.log(true);
} else {
  console.log(false);
  //d++;
  console.log(d);
}

const m = 1,
  n = 1;

if (m ^ n) console.log(true);
else console.log(false);

var a = 5, b = 2;

console.log(a&b);

var a = 10;
console.log(typeof typeof a);