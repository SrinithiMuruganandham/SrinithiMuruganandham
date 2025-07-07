
import test from "@playwright/test";

test(`FileDownload`,async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")

     const filepromise=page.waitForEvent('download')
     page.getByText("Download",{exact:true}).click()
     const fdown=await filepromise;
   //  await fdown.saveAs("Data/myFile"+new Date().getMilliseconds()+".png")

     const now = new Date();
const timestamp = now.toISOString().replace(/[-:.]/g, "").slice(0, 15); // e.g., 20250621T114523
await fdown.saveAs(`Data/myFile_${timestamp}.png`);


})

/* Notes:

new Date() creates a new Date object representing the current date and time.

.getMilliseconds() returns only the milliseconds portion of the current time (i.e., the last 3 digits of the time):

It's a number from 0 to 999.

Example: if the time is 12:45:30.263, then .getMilliseconds() returns 263.

So the resulting file name is:

Data/myFile263.png*/
