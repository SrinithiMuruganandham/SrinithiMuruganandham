// import { chromium, test } from "@playwright/test";

// test("To launch a browser", async () => {

// const browserInstance = await chromium.launch({ headless: false, channel:
// "chrome" });

// const browserContext = await browserInstance.newContext();

// const page = await browserContext.newPage();

// await page.goto("http://leaftaps.com/opentaps/control/main");

// });

// import { chromium, test } from "@playwright/test";


// test(`Test to launch browser`, async() => {
    
// const browser = await chromium.launch();


//  const context =await browser.newContext();


//  const page = await context.newPage();


//  await page.goto("https://www.google.com/");
 
//  const url =  page.url();


//  console.log(`The url of the page ${url}`);
 
// })
import{chromium, test}from '@playwright/test'
test ("To lauch a browser", async ({page}) => {
    await page.goto("https://www.google.com/");
    // const url =page.url()
    // console.log('the url of the page ${url}')
})
