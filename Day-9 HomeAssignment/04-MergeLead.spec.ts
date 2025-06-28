import { expect, test} from "@playwright/test";
test("Creating Merge lead", async ({context,page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill(`#username`,'Demosalesmanager')
    await page.fill(`#password`,'crmsfa')
    await page.click(`.decorativeSubmit`)
    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.click(`//a[text()="Leads"]`)
    await page.click(`//a[text()="Merge Leads"]`)
    const [popup1] = await Promise.all([context.waitForEvent('page'),page.locator('(//img[@alt="Lookup"])[1]').click()]);
    await popup1.waitForLoadState();
    await popup1.locator('(//a[@class="linktext"])[1]').click();
    await popup1.close();
    const [popup2] = await Promise.all([
  context.waitForEvent('page'),
  page.click('(//img[@alt="Lookup"])[2]')
]);

const toLink = popup2.locator('(//a[@class="linktext"])[2]');
await toLink.waitFor({ state: 'attached', timeout: 10000 });
await toLink.evaluate(el => (el as HTMLElement).click());

await popup2.close();
   
  let alertMsg = '';
  let alertType = '';
  page.on('dialog', async dialog => {
    alertMsg = dialog.message();
    alertType = dialog.type();

    console.log('Alert Message:', alertType,alertMsg);
    await dialog.accept(); 
  });


  await page.click('//a[text()="Merge"]');
  expect(alertType).toBe('confirm');
  await expect(page).toHaveTitle("Merge Leads | opentaps CRM");
});


 

    

