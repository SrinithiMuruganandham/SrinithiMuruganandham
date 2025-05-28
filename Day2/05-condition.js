//Nested or multiple condition to check
function getBrowser(){
    if(browserName ==="chrome"){
        console.log("Support is chrome")
}
else if(browserName==="edge"){
    console.log("Supported is edge")

}
else {
    console.log("Not supported")
}
}
let browserName="edge"
getBrowser();


// switch
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