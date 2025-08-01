import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";


let loginData: any


test.beforeAll(`Read data from csv file`, async () => {


    loginData = parse(fs.readFileSync("Data/login.csv"),
        {
            columns: true,
            skip_empty_lines: true
        })


})

test.beforeEach(`Login Functionality`, async ({ page }) => {

    console.log("Running before each test");


    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(loginData[0].username)
    await page.locator(`#password`).fill(loginData[0].password);
    //await page.locator(`#username`).fill("democsr2");
    // await page.locator(`#password`).fill("crmsfa");
    await page.locator(`.decorativeSubmit`).click();
    await page.locator('text=CRM/SFA').click()
    await page.waitForTimeout(2000);

})


test(`Lead Module`, async ({ page }) => {
    console.log("Running Lead Module");

    await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Create Lead']`).click()

})


test(`Account Module`, async ({ page }) => {
    console.log("Running Account Module");


    await page.locator(`//a[text()='Accounts']`).click()
    await page.locator(`//a[text()='Create Account']`).click()

})


test.afterEach(`Fetch the test status of each test`, async ({ }, testinfo) => {
    console.log("Running after each test");
    console.log(testinfo.title);
    console.log(testinfo.status);

})


test.afterAll(`Upload all the attachements`, async () => {
    console.log("Running after all the test");
    console.log(` The reports and screenshot are uploaded in test management tool`);


})