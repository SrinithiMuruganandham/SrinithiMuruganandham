


import { chromium, firefox, test, webkit } from "@playwright/test";
import { channel } from "diagnostics_channel";

test(`Test to launch browser`, async() => { // async()=>{} is a callback function
    
const browser = await chromium.launch({headless:true});

//const browser = await firefox.launch();

//const browser = await webkit.launch();

 const context =await browser.newContext();

 const page = await context.newPage();

 await page.goto("https://www.google.com/");
 
 const url =  page.url();

 console.log(`The url of the page ${url}`);
 
})
