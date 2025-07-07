//Nested if or multiple conditions to check

/* function getBrowser(){

    if (browserName =="chrome") {
        console.log("Supported Browser is Chrome");       
        
    } else if (browserName ==="edge") { 
         console.log("Supported Browser is Edge"); 
    } else {
        console.log("Not a supported browser");    
    }
}

let browserName="edge";
getBrowser(); */
let browser = "firefox";
function getVersion() {

    switch(browser){
        case 'Chrome':
            console.log("131");
            break;
        case 'edge':
            console.log("132");
            break;
        case 'firefox':
            console.log("133");
            break;
        default:
        console.log("Unsuported Browser");
        break;      
            
   }
    
}

getVersion()