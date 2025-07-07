import { test } from "@playwright/test";


test(`Learn to Handle dropdown`, async ({ page }) => {


    await page.goto(`http://leaftaps.com/opentaps/control/main`);


    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);


    await page.locator(`//input[@id='password']`).fill(`crmsfa`);


    await page.locator(`//input[@class='decorativeSubmit']`).click();


    await page.waitForTimeout(2000);


    await page.locator(`//a[contains(text(),"CRM")]`).click();


    await page.locator(`//a[text()="Create Lead"]`).click();


    await page.locator(`#createLeadForm_companyName`).fill("Testleaf");


    await page.locator(`#createLeadForm_firstName`).fill("Ravindran");


    await page.locator(`#createLeadForm_lastName`).fill("Ravindran");
    //If you have select tag then use selectOption


    await page.selectOption(`#createLeadForm_dataSourceId`, { value: "LEAD_DIRECTMAIL" });


    //Get the values from the dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");


    const dropDownCount = await dropdown.count();


    console.log(`No. of values in the dropdown ${dropDownCount}`);


    await page.waitForTimeout(3000)


    for (let index = 0; index < dropDownCount; index++) {


        console.log(await dropdown.nth(index).innerText());



    }




})


