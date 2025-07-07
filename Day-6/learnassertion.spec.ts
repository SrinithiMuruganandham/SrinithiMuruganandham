
import test, { expect } from "@playwright/test";

test(`Assertions`,async({page})=>{
    await page.goto('https://leafground.com/input.xhtml')

    // await page.fill("[placeholder='Babu Manickam']","Vidya")

    const ele=page.locator(`[placeholder='Babu Manickam']`)

    await expect.soft(ele).toBeDisabled()   //soft assert

    console.log('Locator Assertion')  

})
