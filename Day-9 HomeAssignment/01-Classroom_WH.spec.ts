import { expect, test } from "@playwright/test";
test("Windows Handling",async ({context,page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator(`// input[@id='username']`).fill("srinithi26022001738@agentforce.com")
    await page.locator(`// input[@id='password']`).fill('Srinithi@2602')
    await page.locator(`// input[@id='Login']`).click();
    const newPage =context.waitForEvent('page');
    const learnMore=await page.getByTitle(`: Mobile Publisher`,{exact:true}).click();
    const childPage= await newPage;
     await page.waitForLoadState('load');
    const titleChild=console.log(await childPage.title());
    console.log(await page.title()); 
    console.log(await childPage.url())
    await childPage.locator(`//button[text()="Confirm"]`).click();
    


    
})