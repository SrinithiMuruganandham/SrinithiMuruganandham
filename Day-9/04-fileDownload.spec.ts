import { test } from "@playwright/test";


test(`FileDownload`,async ({page}) => {


    await page.goto(`https://leafground.com/file.xhtml`);


    const filePromise = page.waitForEvent(`download`)


    page.getByText(`Download`,{exact:true}).click()
    
    const fDown = await filePromise;


 //   await fDown.saveAs(fDown.suggestedFilename())  //---? saved outside the folder with exactly the name which got downloaded.
   await fDown.saveAs("Data/MayPW.jpeg"); // we can change the location and name of the file--> manually changing the file name
    await page.waitForTimeout(3000)


})