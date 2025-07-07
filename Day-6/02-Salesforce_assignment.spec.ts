// Create lead
import { test, expect } from '@playwright/test';
test("create lead", async ({ page }) => {
    await page.goto("https://login.salesforce.com")
    await page.locator(`#username`).fill(`srinithi26022001738@agentforce.com`)
    await page.locator(`#password`).fill(`Srinithi@2602`)
    await page.locator(`#Login`).click();
    await page.getByTitle("App Launcher", { exact: true }).click();
    await page.getByRole("button", { name: "View All Applications" }).click();
    await page.waitForTimeout(5000)
    // await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Sales");
    // await page.waitForTimeout(3000)
    await page.locator(`//p[text()="Sales"]`).click();
    //setTimeout(function(){debugger;},6000);==to freeze the DOM
    await page.locator(`[title="Leads"] + one-app-nav-bar-item-dropdown svg`).click();
    await page.getByText("New Lead").click();
    await page.getByRole("combobox", { name: "Salutation" }).click()
    await page.getByRole("option", { name: "Ms." }).click()
    await page.locator(`//input[@placeholder="Last Name"]`).fill(`Muruganandham`)
    await page.locator(`//input[@name="Company"]`).fill(`Testleaf`)
    await page.locator(`.SaveEdit`).click();
    const leadConnector = await page.locator(`//slot[@name="primaryField"]"]`).innerHTML();
    await expect(leadConnector).toContain("Ms.Muruganandham")



})

// 2 Edit Lead
/*import {test} from '@playwright/test';
test ("Create Lead",async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();
    await page.locator(`//a[contains(text(),"CRM")]`).click()
    await page.locator(`//a[text()="Leads"]`).click();
    await page.locator(`//a[text()="Create Lead"]`).click();
    await page.locator(`#createLeadForm_companyName`).fill("Testleaf Solutions")
    await page.locator(`#createLeadForm_firstName`).fill("Srinithi")
    await page.locator(`#createLeadForm_lastName`).fill("Muruganandham");
    await page.locator(`// input[@value="Create Lead"]`).click();
    await page.locator(`//a[text()="Edit"]`).click();
    await page.locator(`#updateLeadForm_companyName`).fill("testleaf Consultancy")
    await page.locator(`//input[@value="Update"]`).click();



})*/

//3-Create Indivudual
/*import {expect, test} from "@playwright/test";
test("Create Individual", async ({page}) => {
    await page.goto("http://login.salesforce.com")
    await page.locator(`#username`).fill(`srinithi26022001738@agentforce.com`)
    await page.locator(`#password`).fill(`Srinithi@2602`)
    await page.locator(`#Login`).click()
    await page.locator(`//span[text()="App Launcher"]`).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.locator(`//p[text()="Individuals"]`).click();
    await page.locator(`[title="Recently Viewed | Individuals"] + one-app-nav-bar-item-dropdown svg`).click();
    await page.locator(`//span[text()="New Individual"]`).click();
    await page.locator(`//input[@placeholder="Last Name"]`).fill(`Muruganandham`)
    await page.locator('(//span[text()="Save"])[2]').click();
    await expect(page.locator(`//span[@class="uiOutputText"]`)).toHaveText("Muruganandham");








})*/

//4-Edit Individual
/*import {expect, test} from "@playwright/test";
test("Create Individual", async ({page}) => {
    await page.goto("http://login.salesforce.com")
    await page.locator(`#username`).fill(`srinithi26022001738@agentforce.com`)
    await page.locator(`#password`).fill(`Srinithi@2602`)
    await page.locator(`#Login`).click()
    await page.locator(`//span[text()="App Launcher"]`).click();
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.locator(`//p[text()="Individuals"]`).click();  
    await page.locator(`//input[@placeholder="Search this list..."]`).fill("Muruganandham");  
    await page.locator(`//input[@placeholder="Search this list..."]`).press("Enter");  
    await page.locator(`//a[@title="Show 2 more actions"]`).first().click();
    await page.locator(`//a[text()="Edit"]`).click();
    await page.locator('(//a[@role="combobox"])[1]').click();
    await page.locator('//a[@title="Mr."]').click();
    await page.locator(`.firstName compoundBorderBottom form-element__row input`).fill("Srinithi");
    await page.locator(`.SaveEdit`).click();                    
    await expect(page.locator(`//span[@class="uiOutputText"]`)).toContainText("Srinithi");
    

     
    



})  */


