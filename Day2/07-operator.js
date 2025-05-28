
let x=10;
x+=5;
console.log(x);//o/p =15 x=x+5

x-=5;
console.log(x);// op is 10 because atlast x value is 10

x*=5;
console.log(x)// o/p is 50 because latest x value is 10

// Increment
let value=10
//Post increment = value++=> value= value+1

console.log(value++)// o/p 10 - value printed in next phase increment will happen
console.log(value) // o/p 11

// pre increment latest x=11
console.log(++value)// op is 12
// decrement
let value1=10
//Post decrement = value--=> value= value-1

console.log(value1--)// o/p 10 - value printed in next phase decrement will happen
console.log(value1) // o/p 9

// pre decrement latest x=9
console.log(--value1)// op is 8


// strict equality - compare both type and value
console.log(1===1)// true
console .log(1==='1')// false
console.log(1===5) // false
console.log("chrome"==="Chrome")// false - case sensitive
console.log(1===true)// false dif data type
 // loose equality - compare only value not the datatype
console.log(1==true)//true
console.log(true=='true')// false
// // //Ternary operator

