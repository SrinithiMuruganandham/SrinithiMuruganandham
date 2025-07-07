class Browser{//user defined
// properties
browserInfo:string="Chrome"
browserVersion:number=131

//method
launchBrowser(){
    //userdefined method --> test logic will be written inside a method--> chromium .launch
    console.log("Launch Chrome")// to launch a browser
}

}

// OBJECT
let leaftaps= new Browser()// REFERENCE Created for the class and stored under the variable leaftaps
// let/const variable= new className()--->constructor

leaftaps.launchBrowser()// this method perform action
console.log(leaftaps.browserInfo);
console.log(leaftaps.browserVersion);

