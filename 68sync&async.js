// synchronous and asynchronous
// PHP is synchronous while nodejs is asynchronous

// synchronous
console.log("First");
console.log("Second");
console.log("Third");

// asynchronous
let a = 10;
let b = 0;

setTimeout(() => {
  b = 20;
}, 2000);

console.log(a + b);
