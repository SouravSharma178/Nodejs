// this is the tutorial on promises
let a = 30;
let b = 0;
setTimeout(() => {
  b = 30;
}, 2000);
console.log(a + b);

// to solve this error of calculation we use something called promises
let c = 30;
let d = 0;
// here resolve represents if our operation is correct and reject if our operation becomes invalid
let waitingdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 30;
    // here we write the syntax resolve(the value we have to change)
    resolve(b);
  }, 2000);
});
// now we use a then operator and take b as a parameter,although we can take other variable as a parameter also
waitingdata.then((b) => {
  console.log("This is the correct sum");
  console.log(a + b);
});
