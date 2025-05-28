//Named function
//executing function 
function Srinithi(){
    console.log("My name is Srinithi")
}
Srinithi();

// return value
function Srinithi1(){
   let a=10;
   const b=5;
   return a+b;
    // console.log("My name is Srinithi")
}
console.log(Srinithi1());

// Anonymous function-Function expression

// remove the function name
let funName1 = function(){
    console.log("Hello");

}
funName1


// ARROW FUNCTION - remove the function

let funName2= ()=>{   //=> fat arrow replace your function keyword
    console.log("Sri")
}
funName2

// single line arrow function
let funName3=(a,b)=>a*b;
console.log(funName3(3,4));

//IIFE -IMMEDIATELY INVOKED FUNCTION

(function(){
    console.log("Invoked");
})
()

//