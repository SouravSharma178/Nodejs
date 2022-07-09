// this tutorial will cover the fundamentals of nodejs
// The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
// it is also important to note that nodejs uses a deprecated version of JS as compared to the Browsers,which means that the browsers provide much greater facility/features of JS than nodejs

let x = "30";
let y = 20;
let z = 40;
console.log("The sum is", z + y);

//------------------------------------------------------
// conditionals in nodejs

// now the difference between == and === is that:
// 1. == checks for only the value but === also checks for the variable type
// 2. so this result will print not matched as the type of variable x is string and we checking for an integer

if (x === 30) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

// arrays in nodejs
const arr = [1, 2, 3, 4, 5];
console.log(arr[1]);

//------------------------------------------------------
// functions refresher
// 1.function fun(){
//     console.log("hello world");
// }
// fun();

// 2. let arr = [1,2,3,4,5];
// let i = 0;
// arr.forEach(function(i){
//   console.log(i);
// });

// 3.fun = () => console.log("hello world");
// fun();

// 4.fun = (a,b) => a+b;
// let result = fun(3,5);
// console.log(result);

// 5.function fun(a,b){
//     console.log(a*b);
// }
// fun(3,5);

// 6.const fun = (a,b)=>{
//   console.log("This is my function",a+b);
// };
// fun(5,3);
//------------------------------------------------------

// we can also import data in nodejs

//import {x} from './57.1.app'
// this line will give us an error  as :
// SyntaxError: Cannot use import statement outside a module

// to overcome this issue we will use a different approach

// we can name our variable anything but we will name it same as the file name as it will make it easier to understand where these variables came from
// we are creating an object which will store the variables of this file
// we do not make much dynamic website using nodejs but we make lots of apis
const app = require("./57.1.app");
console.log(app);
// to print the specific variables
console.log(app.x);
console.log(app.y);
console.log(app.speak());

// filter function in nodejs is used to fliter items from an array

let result = arr.filter(function (item) {
// if we would have used console.log here instead of result we would get true and false values
  console.log(item >= 4);
  return item >= 4;
});
console.log(result);
