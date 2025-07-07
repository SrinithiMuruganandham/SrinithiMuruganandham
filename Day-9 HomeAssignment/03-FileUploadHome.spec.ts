import {expect, test  } from "@playwright/test";
test("File upload in web application",async ({context,page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.fill(`#username`,'srinithi26022001738@agentforce.com')
    await page.fill(`#password`,'Srinithi@2602')
    await page.click(`#Login`)
    await page.locator(`//span[text()="App Launcher"]`).click();
    await page.locator(`//button[text()="View All"]`).click();
    const searchBox=  page.locator(`//input[@placeholder="Search apps or items..."]`)
    await searchBox.fill("Accounts");
    await page.waitForTimeout(3000);
    const newPagePromise =context.waitForEvent('page'); 
    page.locator(`//mark[text()="Accounts"]`).click();
    const childPage = await newPagePromise; 
    await childPage.locator(`//div[@title="New"]`).click();
    const name= await childPage.locator(`//input[@name="Name"]`).fill("Srinithi Muruganandham")
    await childPage.selectOption(`(//button[@role="combobox"])[1]`, { value: "Warm" });
    await childPage.selectOption(`(//button[@role="combobox"])[2]`, { value: "Prospect" });
    await childPage.selectOption(`(//button[@role="combobox"])[4]`, { value: "Banking" });
    await childPage.selectOption(`(//button[@role="combobox"])[3]`, { value: "Public" });
    await childPage.locator(`//button[@name="SaveEdit"]`).click();
    await expect (childPage.locator(`//slot[@name="primaryField"]`)).toHaveText("Srinithi Muruganandham");
    const filePromise= childPage.waitForEvent('filechooser')
    page.locator(`//div[@title="Upload Files"]`).click();
    const fileupload=await filePromise
   await fileupload.setFiles(`Data/Playwright_home.PNG`)
   await childPage.waitForSelector('text=File uploaded successfully'); 
   await childPage.locator(`//button[text()="Done"]`).click(); 
   await expect(childPage.locator('text=File uploaded successfully')).toBeVisible(); 
}); 

    
    

