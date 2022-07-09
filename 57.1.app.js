//export let x = 20; // this will not work in nodejs as it does not support it
//export let y = 20;

// this is the syntax to declare objects in nodejs
module.exports = {
  x: 10,
  y: 20,
  speak: () => 50,
};
