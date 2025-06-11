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


    await page.locator(`#createLeadForm_firstName`).fill("Srinithi");


    await page.locator(`#createLeadForm_lastName`).fill("Muruganandham");
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

//Classroom :
// 1.Choose a Currency dropdown  and print the values
await page.selectOption(`#createLeadForm_currencyUomId`,{label:`INR - Indian Rupee`} )
//Get the values from the dropdown
    const currencyDropdown = page.locator("#createLeadForm_currencyUomId>option");


    const CurrencyDropDownCount = await currencyDropdown.count();


    console.log(`No. of values in the Currency dropdown ${CurrencyDropDownCount}`);


    //await page.waitForTimeout(3000)


    for (let index = 0; index < CurrencyDropDownCount; index++) {


        console.log(await currencyDropdown.nth(index).innerText());



    }
// and Country drop dowm and print the values

await page.selectOption(`#createLeadForm_generalCountryGeoId`,{value:'IND'} )
//Get the values from the dropdown
    const countryDropdown = page.locator("#createLeadForm_generalCountryGeoId>option");


    const CountryDropDownCount = await countryDropdown.count();


    console.log(`No. of values in the country dropdown ${CountryDropDownCount}`);


    //await page.waitForTimeout(3000)


    for (let index = 0; index < CountryDropDownCount; index++) {


        console.log(await countryDropdown.nth(index).innerText());



    }


})