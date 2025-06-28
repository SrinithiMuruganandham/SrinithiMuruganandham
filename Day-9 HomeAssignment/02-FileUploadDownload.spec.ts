import { expect, test } from "@playwright/test";
test("File upload", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePromise= page.waitForEvent('filechooser')
    page.locator(`#drag-drop-upload`).click();
    const fileupload=await filePromise
    const assertupload= await fileupload.setFiles(`Data/Playwright_home.PNG`)
    await page.waitForTimeout(30000)
   // await expect(page.locator('#uploaded-files')).toContainText('Playwright_home.PNG');
   // const clickUpload= page.click(`//input[@value='Upload']`)

})
/*
import { test } from "@playwright/test";
test("Download png", async ({page}) => {
    await page.goto(`https://the-internet.herokuapp.com/download`)
    const filePromise= page.waitForEvent(`download`)
    page.locator('text=file.json').click()
    const download1= await filePromise;
    await download1.saveAs("Data/Playwright_Download.json")
    
})

*/