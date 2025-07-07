


import { test } from "@playwright/test";

test(`Login Functionality`,async ({page}) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`democsr`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.click(`text=CRM/SFA`)    
    await page.context().storageState({path:"Data/login_LTY.json"})    
})
