import { test } from "@playwright/test";


test.use({storageState:'Data/login_LTY.json'})

test(`Launch from homepage`,async ({page}) => {    
    await page.goto(`http://leaftaps.com/crmsfa/control/main`)
    console.log(await page.title());
    
})