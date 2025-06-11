//ASSIGNMENT 1-- Create a lead
import{expect, test} from '@playwright/test'
test("Create the lead", async ({page}) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.locator(`//a[contains(text(),'Leads')]`).click();
    await page.locator(`//a[contains(text(),'Create Lead')]`).click();
    await page.locator(`#createLeadForm_companyName`).fill(`Testleaf solutions`);
    await page.locator(`#createLeadForm_firstName`).fill(`Srinithi`);
    await page.locator(`#createLeadForm_lastName`).fill(`Muruganandham`);
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill("Ms")
    await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill("HomeAssignmentLocators");
    await page.locator(`#createLeadForm_annualRevenue`).fill(`50000000`);
    await page.locator(`#createLeadForm_departmentName`).fill(`Testleaf testing`);
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`9876543210`);
    await page.locator(`//input[@class="smallSubmit"]`).click();
    await expect (page.locator(`//span[@id="viewLead_firstName_sp"]`)).toContainText("Srinithi");
    await expect( page.locator(`//span[@id="viewLead_lastName_sp"]`)).toContainText("Muruganandham");
   await expect ( page.locator(`//span[@id="viewLead_companyName_sp"]`)).toContainText("Testleaf solutions");
  await expect(page.locator(`#viewLead_statusId_sp`)).toContainText("Assigned"); 
    await expect(page.locator(`//span[@id="viewLead_firstName_sp"]`)).toHaveText("Srinithi");
    await expect(page.locator(`//span[@id="viewLead_lastName_sp"]`)).toHaveText("Muruganandham");           
    await expect(page.locator(`//span[@id="viewLead_companyName_sp"]`)).toHaveText(`Testleaf solutions`)
    await expect(page.locator(`#viewLead_statusId_sp`)).toHaveText("Assigned");
})

//Assignment 2  --Edit a lead
/*import { test, expect } from '@playwright/test';
test("Edit a lead", async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.locator(`//a[contains(text(),'Leads')]`).click();
    await page.locator(`//a[text()="Find Leads"]`).click(); 
    await page.locator('//label[text()="First name:"]/following::input[@name="firstName"][3]').fill(`Srinithi`);
    await page.locator(`//button[text()="Find Leads"]`).click();
    await page.locator('//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a').first().click();
    await page.locator(`//a[text()="Edit"]`).click();
    await page.locator(`#updateLeadForm_companyName`).fill("Testleaf Playwright")
    await page.locator(`#updateLeadForm_annualRevenue`).fill(`10000000`);
    await page.locator(`#updateLeadForm_departmentName`).fill("Automation testing")
    await page.locator(`#updateLeadForm_description`).fill("Sample and mock test for plyawright Automation testing")
    await page.locator(`//input[@value="Update"]`).click();
    expect(await page.locator(`//span[@id="viewLead_companyName_sp"]`).textContent()).toContain("Testleaf Playwright");
    expect(await page.locator(`#viewLead_annualRevenue_sp`).textContent()).toContain("10,000,000");             
    await expect(page.locator(`#viewLead_departmentName_sp`)).toHaveText("Automation testing");
    await expect(page.locator(`#viewLead_description_sp`)).toHaveText("Sample and mock test for plyawright Automation testing");
    expect(await page.locator(`//span[@id="viewLead_companyName_sp"]`).textContent()).toContain("Testleaf Playwright");   })

*/

//ASSIGNMENT -3  Create a new Account
/*import { test, expect } from '@playwright/test';
test("Create a new Account", async ({ page }) => {  
    await page.goto("http://login.salesforce.com");
    await page.getByLabel("Username").fill("srinithi26022001738@agentforce.com")
    await page.getByLabel("Password").fill("Srinithi@2602");
    await page.getByRole("button",{name:"Log In"}).click();
    await expect(page).toHaveTitle("Lightning Experience");
    await expect(page).toHaveURL("https://orgfarm-b901b13c65-dev-ed.develop.lightning.force.com/lightning/page/home");
    await page.locator(`//span[text()="App Launcher"]`).click();
    await page.getByText("View All").click();
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator(`(//p[@class="slds-truncate"])[1]`).click();
    await page.locator(`//a[title="Accounts"]`).click();
    await page.getByRole("button", { name: "New" }).click();
    await page.locator(`//input[@name="Name"]`).fill("Testleaf Solutions");
    await page.locator(`//button[text()="Save"]`).click();
     const leadConnector=await page.locator(`// div[@class="forceVisualMessageQueue"]`).innerHTML();
    await expect(leadConnector).toContain("Testleaf Solutions");
})*/
