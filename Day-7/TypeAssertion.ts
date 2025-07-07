

//Type Assertions

//using angular bracket

let apiResponse : any = "Record from server";//server response

let myResponse = <string> apiResponse; // You are telling typescript that you know better about the datatype pf the value
console.log(apiResponse.length);

//using as keyword

let sCode : any = "Success";
let statusLength = sCode as string;
console.log(statusLength.length);
