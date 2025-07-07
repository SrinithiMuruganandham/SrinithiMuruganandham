/*Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
username:vidyar@testleaf.com
password:Sales@123
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name 
9. Click Save and Verify Leads name created */

import{test,expect} from '@playwright/test';
test("create lead", async ({page}) => {
    await page.goto("https://login.salesforce.com")
    await page.locator(`#username`).fill(`srinithi26022001738@agentforce.com`)
    await page.locator(`#password`).fill(`Srinithi@2602`)
    await page.locator(`#Login`).click();
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
   await page.waitForTimeout(5000)
    // await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Sales");
    // await page.waitForTimeout(3000)
    await page.locator(`//p[text()="Sales"]`).click();
    //setTimeout(function(){debugger;},6000);==to freeze the DOM
    await page.locator(`[title="Leads"] + one-app-nav-bar-item-dropdown svg`).click();
    await page.getByText("New Lead").click();
    await page.getByRole("combobox",{name:"Salutation"}).click()
    await page.getByRole("option",{name:"Ms."}).click()
    await page.locator(`//input[@placeholder="Last Name"]`).fill(`Muruganandham`)
    await page.locator(`//input[@name="Company"]`).fill(`Testleaf`)
    await page.locator(`.SaveEdit`).click();
    const leadConnector=await page.locator(`// div[@class="forceVisualMessageQueue"]`).innerHTML();
    await expect(leadConnector).toContain("Ms.Muruganandham")
    
    
    
})




/*trainer code

await page.goto("http://login.salesforce.com")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
   // await page.waitForSelector("div.slds-icon-waffle")
    //applauncher
  //  await page.locator(".slds-icon-waffle").click()
    await page.getByTitle('App Launcher',{exact:true}).click()
    //viewall  //button[text()='View All'] or button[text=View All]
    await page.click("//button[text()='View All']")
    //Sales //input[@placeholder='Search apps or items...']   or input[placeholder='Search app or items']
    await page.getByPlaceholder('Search apps or items...').fill('Sales')
    //click Sales  - (//mark[text()='Sales'])[3] or (//mark[text()='Sales']) .nth(2) 
    await page.getByText('Sales',{exact:true}).click()
    //Leads
    await page.locator(`[title='Leads'] +one-app-nav-bar-item-dropdown svg`).click()


    await page.waitForTimeout(3000)*/


