let x=10;
x+=5;
console.log(x); //15

x-=5;
console.log(x); //10

x*=5;
console.log(x); //50

//Increment Operator ++

let value = 10;

//Post increment = value++ => value= value+1
console.log(value++); //10 => value
console.log(value);//11

//Pre increment
console.log(++value); //12
console.log(value); //12

//Post decrement = value-- => value= value-1
console.log(value--); //12 => value
console.log(value);//11

//Pre decrement
console.log(--value); //12
console.log(value); //12

/* Strict Equality
1. Compare the data type and
2. Compares the value

Non- strict equality-
Compares onltt the values not the datat type*/

console.log(1===1); // true
console.log(1===5);//false
console.log(1==="1");//false
console.log("chrome"==="Chrome");//false 
console.log(1==true);// true // In Javascript coerces the boolean to a number true-->1
console.log(1===true);// false// here boolean is not getting converted
console.log(true=="true");//false












