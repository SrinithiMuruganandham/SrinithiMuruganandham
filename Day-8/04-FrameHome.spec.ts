import { expect, test } from "@playwright/test";
test("interact with the web elements present inside iframes",async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml")
    const frameIndex = page.frames();
    const frameIndex2= frameIndex[1].click("button#Click")
    await page.waitForTimeout(3000)
    await expect (frameIndex2).toContain("Hurray! You Clicked Me")
   const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
        const frame_outerframe = card.frameLocator("iframe");
        const frame_innerframe = frame_outerframe.frameLocator("iframe");
        await frame_innerframe.locator("#Click").click();


        await page.waitForTimeout(3000)

})



