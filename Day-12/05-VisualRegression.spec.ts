/* import { expect, test } from "@playwright/test";


test(`Visual regression testing`,async ({page}) => {


  await page.goto(`https://www.testleaf.com/`)
  const ss = await page.screenshot();
  expect(ss).toMatchSnapshot()
  
}) */












//Notes :
 //assert a specific portion 



import { expect, test } from "@playwright/test";


test('Partial Visual check', async ({ page }) => {
  await page.goto('https://www.testleaf.com/');


  // Crop the screenshot to a specific area
  const ss = await page.screenshot({
    clip: {
      x: 100,      // starting x coordinate
      y: 200,      // starting y coordinate
      width: 300,  // width of the area
      height: 200  // height of the area
    }
  });


  expect(ss).toMatchSnapshot('partial-visual-check.png');
});