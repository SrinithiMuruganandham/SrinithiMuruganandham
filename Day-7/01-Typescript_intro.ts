import { Console } from "console";

let a=20;/// implicit inference
a="Twenty"  // Error: Type 'string' is not assignable to type 'number'. 

let b:number=20;/// explicit type annotation
b="Twenty" // Error: Type 'string' is not assignable to type 'number'.

// any
let c:any=20;/// any type
c="Twenty" // No error, 'c' can be any type.


// unknown
let d:unknown=20;/// unknown type           
d="Twenty" // Error: Type 'string' is not assignable to type 'unknown'.
// To assign 'unknown' to a specific type, you need to use a type assertion or a type guard.

let value: unknown="123";
if(typeof value==="number"){
    console.log(value)
}

//never datatype
function infiniteLoop(): never{
    while(true){
        console.log("Looping Forever")
    }
}
infiniteLoop();


//tuple
let user:[string,number,boolean]=["Testleaf",123,true];
console.log(user);


// object literal
let user1:string="sri"// normal declaration
let user2:{
    firstName:string,
    lastName:string,
    email:string,
    isActive:boolean,
    phoneNumber:number
}={
    firstName:"Srinithi",
    lastName:"M",
    email:"srinithi26022001@gmail.com",
    isActive:true,
    phoneNumber:9087654321
}


// Type alias
//union type alias-|pipin symbol

type userName=string|number|boolean;
let userID: userName="srinithi26022002@gmailcom";
userID=9087654321;
userID=true;


//Intersection type alias -&
type Admin={
    adminName:string,
    priviledges:string[],
    age:number
}
type Emp={
    name:string,
    EmpId:number,
    date:string,
    age:number
}

type eligiblityQA =Admin & Emp
const QAuserProject:eligiblityQA={
   adminName:"testleaf",
    priviledges:["server"],
    age:30,

    name:"sri",
    EmpId:123,
    date:"04/06/25"
}


// Type assertion
//using angular bracket
let apiResponse:any="record from Server";
let myResponse=<string>apiResponse// convert apiresponse as string using<>--  u are telling ts that you know better about the datatype
console.log(myResponse.length)

//usin as keyword
let sCode:any="success";
let mysCode= sCode as string;
console.log(mysCode.length);


// enum

// Numeric enum-- default type
enum TestResult{
    Pass,
    Fail,
    Skip
}
function logTestResult(testCaseName:string,Result:TestResult){
    return 'Test: ${testCaseName} Result code:${result}'
}
    logTestResult("LoginPage",TestResult.Pass)
    logTestResult("Signup",TestResult.Fail)
    logTestResult("HomePage",TestResult.Skip)


// String Enum
enum broswerType{
    Chrome="chrome",
    firefox="Firefox",
    Edge="Edge"
}
function launch(Browser:broswerType){
console.log(`launch the browser using ${Browser}`);


}
launch(broswerType.Chrome)


//Heterogenous

enum BrowserStatus{
    open,
    Incognito,
    Crash="CRASHED",
    Close=2// REINITIALIZATION  NEED TO DONE FOR HETEROGENOUS

}
function reportBrowserStatus(status:BrowserStatus){
  return `Current Status of browser is $(status)`
}
console.log(reportBrowserStatus(BrowserStatus.open))