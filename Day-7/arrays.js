/* Arrays in JavaScript

1. Dynamic in Size
Arrays in JS can grow or shrink in size as elements are added abd removed

2.Heterogenouw elements
Arrays canstore different data types like numbers , strings , objects */

//Using array literal

let alpha1 = ["a","b","c","d","e"] 

//Using Array Constructor

let alpha2 = new Array(5); // Create an array with 5 empty slots -- [<5 empty items>]
alpha2=["a","b","c","d","e"]
console.log(alpha2);

console.log(alpha1===alpha2); // === equality --> checks for value, datatype also memory location

//1. push --> add one or more elements to the end of the array.

let letters = ["a","b","c","d","e"];
letters.push("f","g","h");
console.log(letters);

//2.pop --> remove only one from the end of an array

letters.pop();
console.log(letters);

//3.shift --> remove only one element from the first part of the array

letters.shift(letters);
console.log(letters);

//4. unshift --> add one or more elements to the begining of the array.

letters.unshift("x","y","z");
console.log(letters);


//5. slice
//Extracts a section of an array without modifying the original array.
// arrays.slice(startIndex, endIndex) --> negative values allowed.--> if start index >= end the result is blank
//Not swappable

let letters1 = ["a","b","c","d","e"];
//result = letters1.slice(-4);
//console.log(result);


//6. splice --> add or remove the elements from the array
//array.splice(startIndex, deleteCount, item1, item2...)

letters1.splice(1,2,"x","y");
console.log(letters1); // O/P : [ 'a', 'x', 'y', 'd', 'e' ]

letters1.splice(2,3,"x","y","z");
console.log(letters1); // O/P : [ 'a', 'b', 'x', 'y', 'e' ]

//7. spread syntax (...)

let numbers1 = [1,2,3,4];
let numbers2 = [5,6,7,8];

let mergedArray = [...numbers1,...numbers2];
//console.log(mergedArray);

//8. concat()

let mergedConcat = numbers1.concat(numbers2);
console.log(mergedConcat);

//9. Sorting the array

let numberArray = [10,9,8,7];
numberArray.sort();
console.log(numberArray); //o/p : [ 10, 7, 8, 9 ]

numberArray.sort((a,b)=>a-b); //o/p : [ 7, 8, 9, 10 ] ascending order
console.log(numberArray);

numberArray.sort((a,b)=>b-a); //o/p :  [ 10, 9, 8, 7 ] order
console.log(numberArray);

//10. filter

let even = numberArray.filter((num)=>num%2===0);//num = 10; 10%2===0, 9%2 ===0
console.log(even);

//11. map

let squared = numberArray.map((num)=>num*num); //
console.log(squared);


//Classroom activity in intersection of array

let intersection = (arr1,arr2)=>{

    

   

}

let arr1 = [1,4,6,8,9]
let arr2 = [2,1,3,4,6]


console.log(intersection(arr1,arr2));



//Intersection array should includeelements that appaear in both arrays without any duplicate