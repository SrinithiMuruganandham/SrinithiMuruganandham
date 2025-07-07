
import { test } from "@playwright/test";

test.describe('Describe Test annotation', () => {

    test.describe.configure({ mode: "parallel", timeout: 6000 })


    test(`Group1`, async ({ page }) => {
        await page.goto(`http://leaftaps.com/opentaps/control/main`);
        await page.locator(`#username`).fill("democsr2");
        await page.locator(`#password`).fill("crmsfa");
        await page.locator(`.decorativeSubmit`).click();

    })

    test(`Group2`, async ({ page }) => {
        await page.goto(`http://leaftaps.com/opentaps/control/main`);
        await page.locator(`#username`).fill("democsr2");
        await page.locator(`#password`).fill("crmsfa");
        await page.locator(`.decorativeSubmit`).click();

    })

    test(`Group3`, async ({ page }) => {
        await page.goto(`http://leaftaps.com/opentaps/control/main`);
        await page.locator(`#username`).fill("democsr2");
        await page.locator(`#password`).fill("crmsfa");
        await page.locator(`.decorativeSubmit`).click();

    })
})
