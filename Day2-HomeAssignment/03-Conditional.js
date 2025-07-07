function launchBrowser(BrowserName){
    if(BrowserName==="chrome")
    {
        console.log("launchBrowser is "+ BrowserName)
    }
    else if(BrowserName==="Firefox"){
        console.log("LaunchBrowser is" + BrowserName)
    }
    else{
        console.log("LaunchBrowser is "+ BrowserName)
    }
}

function runTests(){
    switch(testType){
        case 'smoke':
            console.log("The testType is smoke");
            break;
        case 'sanity':
            console.log("The testType is sanity");
            break;
        case 'regression':
            console.log("The testType is regression");
            break;
        default:
            console.log("The testType is smoke");
            break;
    }

}
let BrowserName="Firefox"
let testType="regression";
launchBrowser(BrowserName);
runTests();







