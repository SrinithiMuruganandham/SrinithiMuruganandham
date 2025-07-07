

import { test } from "@playwright/test";

test(`Test to Handle 2 confirm alerts using page.on event listener`, async ({ page }) => {

    // Go to Alert page
    await page.goto(`https://leafground.com/alert.xhtml`);

    // Counter to track number of confirm dialogs — used when messages are SAME
    let confirmCounter = 0;

    // Event Listener for all dialogs
    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        const type = dialog.type();

        console.log(`The type of the alert is: ${type}`);
        console.log(`The message says: ${message}`);

        // CASE 1: If Confirm dialogs have DIFFERENT messages
        /*
        if (type === 'confirm') {
            if (message.includes("some specific keyword for first")) {
                await dialog.accept(); // Accept specific confirm
            } else {
                await dialog.dismiss(); // Dismiss other confirm
            }
        }
        */

        // CASE 2: If Confirm dialogs have SAME message — use counter logic
        if (type === 'confirm') {
            confirmCounter++;
            if (confirmCounter === 1) {
                console.log("Accepting first confirm dialog.");
                await dialog.accept();
            } else {
                console.log("Dismissing second confirm dialog.");
                await dialog.dismiss();
            }
        }

        // Handle prompt dialog
        else if (type === 'prompt') {
            await dialog.accept("Testleaf");
        }

        // Handle simple alert
        else {
            await dialog.dismiss();
        }
    });

    // 1️. Simple Alert
    await page.locator(`text=Show`).first().click();
    await page.waitForTimeout(2000);

    // 2️. First Confirm Alert — will be ACCEPTED
    await page.locator(".card").filter({ hasText: "Confirm Dialog" })
        .locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    // 3️. Second Confirm Alert — will be DISMISSED
    await page.locator(".card").filter({ hasText: "Confirm Dialog" })
        .locator("//span[text()='Show']").click();
    await page.waitForTimeout(2000);

    // 4️. Prompt Alert — Will be accepted with input
    await page.locator(".card").filter({ hasText: "Prompt Dialog" })
        .locator("button").filter({ hasText: "Show" }).click();
    await page.waitForTimeout(2000);
});
