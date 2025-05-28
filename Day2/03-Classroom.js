/*var browserVersion= "Chrome";
function getBrowserVersion(){
    let browserVersion="Google"
    

    if(getBrowserVersion == 'Chrome')
    {
     console.log(browserVersion + "is Correct")      
    }
    else{
      let browserVersion="firefox"  
    console.log(browserVersion + " is Wrong")
    }
}
getBrowserVersion();*/

const browserVersion="Chrome";
function getBrowserVersion(){
  if(browserVersion==="Chrome"){
    let browserVersion="Google";
    console.log("Inside is"+ browserVersion)
  }
  console.log("Browser name"+ browserVersion)
}

getBrowserVersion();
console.log("Outside function"+ browserVersion)
