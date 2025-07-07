import { test } from "@playwright/test";


test(`Learn CSS using Leaftaps`,async ({page}) => {


    await page.goto(`http://leaftaps.com/opentaps/control/main`);


    await page.locator(`#username`).fill(`democsr`);


    await page.locator(`#password`).fill(`crmsfa`);


    await page.locator(`.decorativeSubmit`).click();
    
    await page.waitForTimeout(2000);


    //await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.locator(`a:has-text("CRM")`).click();  //Playwright CSS selector  
    


    //
    await page.waitForTimeout(5000);


     await page.locator(`//a[text()="Create Lead"]`).click(); 
})