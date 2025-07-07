import test, { expect } from "@playwright/test";

test(`Auto wait`,async({page})=>{
   
    await page.goto("https://leafground.com/waits.xhtml")
     const clickEle=page.locator("(//span[text()='Click'])[1]")
     await clickEle.screenshot({path:"data/ss.png"})
     await clickEle.click()
     const text =await page.locator(`//span[text()='I am here']`).innerText()
     expect(text).toContain('I am')

})