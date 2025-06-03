import{chromium,firefox,test} from '@playwright/test'
test("To launch the browser", async () => {
  const edgeBrowser = await chromium.launch({headless: false,channel: 'msedge'});
  const edgeContext=await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();
  await edgePage.goto('https://www.redbus.in');
  console.log('THE TITLE OF REDBUS IS:', await edgePage.title());
  console.log('THE URL OF REDBUS IS:', await edgePage.url());
  await edgeBrowser.close();


  // Launch Flipkart in Firefox
  const firefoxBrowser = await firefox.launch({
    headless: false,channel:'firefox'});
    const firefoxContext= await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();
  await firefoxPage.goto('https://www.flipkart.com');
  console.log('THE TITLE OF FIREFOX IS: ', await firefoxPage.title());
  console.log(`THE URL OF FIREFOX IS : `, await firefoxPage.url());
  await firefoxBrowser.close();
});