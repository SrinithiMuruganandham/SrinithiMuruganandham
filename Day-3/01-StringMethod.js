/* 

String Declaration:

1. Sting Literal
2. Object Literal*/

//String Literal - "",'',``// String pool memory same memory allocation

/* let firstName = `Sri`;
let userName = `Sri`; */

//String Object // Heap Memory it gets stored in two different memory address

/* let firstName1 = new String("Sri");
let userName1 = new String("Sri") */


//Escape Sequence

let testType = 'It\'s a regression testing';
console.log(testType);

let stringType = "Hello, this is a \"double quote\"";
//Note : backslash to get your ' , " " get enabled inside a string

console.log(stringType);


//concantenation - concat()

let testCaseName = "Create a new Lead";
let testCaseId = 123;

let result = testCaseId.toString().concat(testCaseName);
console.log(result);

// with +

let result1 = testCaseId+"-" +testCaseName+"passed in the last execution";
console.log(result1);


//Template literal =`${}` , "",'

let testcases = 200;
let output = `There are ${testcases} testcases`
console.log(output);

//length - no. of letters present in a string

let courseName = "Playwright";

//length starts from 1
//index starts from 0

console.log(`The length of the string id ${courseName.length}`);

//charAt
console.log(`The charAt of 2 of the string id ${courseName.charAt(2)}`);


//indexOf
console.log(`The indexOf of a ${courseName.indexOf('a')}`);

//includes - true/ false
console.log(`includesof Method of a letter ${courseName.includes('x')}`);


//split
let companyName = "Qeagle Assurance Limited";
let splitCompanyNameAsArray = companyName.split("");
console.log(splitCompanyNameAsArray);

let courseName1 = "PlaywrightJS" // "Playwrig ht JSTS"=>Index 0,1,2,3,4,5,8,9,10,11// reverseindex 
//slice
let outputSlice = courseName1.slice(-4,-2);
console.log(outputSlice);

/* 
Note :

start index included and end index is not included also it is optional
Negative index allowed counts from the end from -1*/

//substring
let outputSubstring1 =courseName.substring(5,3)
let outputSubstring2 =courseName.substring(5,-3)
console.log(outputSubstring1);
console.log(outputSubstring2);
/* 
Note :

1. start index included and end index is not included also it is optional.
2. Does not support negative index instead it treats as "0"
3. Swapping can be done between your index
 */

//String Reversal

let companyName1="Testleaf"

//Output :"faeltset"

function reversString(){
let chars = companyName1.split("");
console.log(chars);

let reversed="";

for (let index = chars.length-1; index >= 0; index--) {
    reversed=reversed+chars[index];
   }
return reversed;

}
console.log(reversString());



let originalString = "Testleaf";

let reverse = originalString.split("").reverse().join("");
console.log(reverse);







