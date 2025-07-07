//Button
/*import { expect, test } from "@playwright/test";
test("Button Visiblity",async ({page}) => {
    await page.goto("https://leafground.com/button.xhtml")
   const clickButton = page.locator("//span[text()='Click']/parent::button");
   await clickButton.click();
   await expect(page).toHaveTitle(`Dashboard`)
    console.log("Title of the page", await page.title())
    await page.goBack();
    const clickButton1 = page.locator("//span[text()='Disabled']/parent::button");
    await  expect(clickButton1).toBeDisabled();

    const clickButton2= page.locator("//span[text()='Image']/parent::button");
   await clickButton2.click();

   const clickButton3= page.locator("//button[contains(@class, 'rounded-button')]");
   const count= await clickButton3.count();
   console.log(`Total Buttons is ${count}`)
})*/

//checkbox
/*import { test,expect } from "@playwright/test";
test("Checkbox",async ({page}) => {
    await page.goto("https://leafground.com/checkbox.xhtml")
    const Checkbox= await page.locator("//span[text()='Basic']")
    const Checkbox1= await Checkbox.click()
    console.log("The basic check is clicked ")
    const Checkbox2= await page.locator("//span[text()='Ajax']")
    const Checkbox3= await Checkbox2.click()
    console.log("The Ajax check is clicked ")
    const favouriteCheckbox= page.locator("//label[text()='Javascript']")
    await favouriteCheckbox.click()
    console.log("Favourite subject Javascript is clicked")

    const Checkbox4= page.locator(`//div[@id='j_idt87:ajaxTriState']`)
    const Checkbox5= await Checkbox4.click()
    console.log("The Tri State checkbox is clicked ")
     
    const triStateStatus = await Checkbox4.getAttribute("aria-checked");

if (triStateStatus === "mixed") {
  console.log("Tri-State: Indeterminate (mixed)");
} else if (triStateStatus === "true") {
  console.log("Tri-State: Checked");
} else if (triStateStatus === "false") {
  console.log("Tri-State: Unchecked");
} else {
  console.log("Unknown Tri-State value:", triStateStatus);
}


    const toggleClick= page.locator(`//div[@class='ui-toggleswitch-slider']`)
    const toggleClick1=await toggleClick.click();
    console.log(`Toggle Button is clicked`)

    const disabledElement = page.locator("//div[@id='j_idt87:j_idt102']");
    const isDisabled = await disabledElement.getAttribute("aria-disabled");

    if (isDisabled === "true") {
        console.log("Element is aria-disabled.");
} else {
        console.log(" Element is not aria-disabled.");
}


    const cities = ["Paris", "London", "Rome"];
    for (const city of cities) {
    const checkbox = page.locator(`//label[text()='${city}']`)
    console.log(` Multi-select checkbox '${city}' selected.`);
  }



    
})*/

//DROPDOWN
/*import {  test,expect} from "@playwright/test";
test("Dropdown",async ({page}) => {
    await page.goto("https://leafground.com/select.xhtml")
    const radiobutton= await page.locator(`//select[@class='ui-selectonemenu']`)
    await radiobutton.click();
    await radiobutton.selectOption({ label: 'Playwright' })
  
   // const radiobutton1= await radiobutton.count();
    //console.log("values in tool `${radiobutton2}`")
    
     const CountryPref = page.locator("//label[@id='j_idt87:country_label']");
 await CountryPref.click();
 const countryOption = page.locator("//li[text()='India']");
await countryOption.click();
   const StatePre= page.locator("//label[text()='Select City']")
   StatePre.click()
   const SameState= page.locator("//ul[@id='j_idt87:city_items']");
   await expect(SameState.first()).toBeVisible();
  const cityList = await SameState.allTextContents();
  console.log("Cities loaded for country 'India':", cityList);

  const techs = ["AWS", "Appium", "Playwright"];
  for (const tech of techs) {
    await page.locator("input[id='j_idt87:auto-complete_input']").fill(tech);
    await page.locator(`//ul[@id='j_idt87:auto-complete_panel']//li[text()='${tech}']`).click();
    console.log(`Selected technology: ${tech}`);}

    const language= page.locator('//label[text()=`Select Language`]')
    await language.click();
    const languageSelect= page.locator("//ul[role='listbox']//li")
    await languageSelect.click();
    const languages = await languageSelect.allTextContents();
  console.log("Available languages:", languages);
  await languageSelect.nth(1).click(); 
  console.log(`Selected Language: ${languages[1]}`);


  await page.locator("//label[text()='Select Values']").click();
  const valueOptions = page.locator("ul[role='listbox'] li");
  const valueTwo = valueOptions.filter({ hasText: 'Two' });
  await valueTwo.first().click();
  console.log("Selected value: Two");

})*/


//Radio Button
import {test,expect  } from "@playwright/test";
test("Radio Button",async ({page}) => {
  await page.goto("https://leafground.com/radio.xhtml")
  const favouriteBrowser= page.locator("//label[@for='j_idt87:console1:0']");
  await favouriteBrowser.click();
  await expect(favouriteBrowser).toBeEnabled();

  const favouriteCity= page.locator("//label[@for='j_idt87:city2:0']")
  await favouriteCity.click()

  const defaultSelectedYears = page.getByRole('radio', { checked: true, name: /Years/ });
  const defaultLabel = await defaultSelectedYears.getAttribute('value');
  console.log(' Default selected age group:', defaultLabel);
  expect(defaultSelectedYears).toBeChecked();


  const newAgeRadio = page.locator("label:text('41-60 Years')")
  await newAgeRadio.check();
  console.log(' Selected new age group: 41-60 Years');

  const defaultSelectedRadio = page.locator(`//label[@for="j_idt87:console2:2"]`)
  await expect(defaultSelectedRadio).toBeVisible();
  const inputId = await defaultSelectedRadio.getAttribute('for');
  const defaultSelectedInput1 = page.locator(`#${inputId}`);

await expect(defaultSelectedRadio).toBeChecked();
console.log('Default selected radio button ID:', inputId);
})