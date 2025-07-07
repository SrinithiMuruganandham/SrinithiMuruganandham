import{chromium,test} from'@playwright/test'
test ("To launch the browser",async () => {
    const chromeBrowser= await chromium.launch({headless:false, channel:'chrome'});
    const  chromeContext= await chromeBrowser.newContext();
    const chromePage= await chromeContext.newPage();
    await chromePage.goto("https://www.google.com/");
    console.log("The title of the chrome: ",await chromePage.title());
    console.log("The URL of the chrome: ",await chromePage.url());

    const edgeBrowser= await chromium.launch({headless:false,channel:'msedge'});
    const edgeContext= await edgeBrowser.newContext();
    const edgePage= await edgeContext.newPage();
    await edgePage.goto("https://www.amazon.in/");
    console.log("The tile of the edge is: ",await edgePage.title());
    console.log("The URL of the edge is: ", await edgePage.url());
    
})