

//page ficture
import { chromium, firefox, test, webkit } from "@playwright/test";

test(`Test to launch browser using page fixture`, async({page}) => { // async()=>{} is a callback function

 await page.goto("https://www.google.com/");
 
 const url =  page.url();

 console.log(`The url of the page ${url}`);
 
})
