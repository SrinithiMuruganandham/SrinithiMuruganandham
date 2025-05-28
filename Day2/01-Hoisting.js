// Hoisting
//var- old js
console.log(x);// output undefined
var x=10;

//internally var went like
var y;
console.log(y);
y=98

// let and const - modern js
console.log(z)
let  z=19;// throws reference error

// basically js is a scripting language so it transformed into programmed language so that needs to run all other languages so let and const came into action  so wherever whenever we are using let and const for hoisting it should throw reference error in the output like other language // scripting allows the hoisting and give output as undefined

// let and const also hoisted but not initialized
//they exist in Temporal dead zone so it throws reference error