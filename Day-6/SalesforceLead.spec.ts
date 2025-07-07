import test, { expect } from "@playwright/test";

test(`Leads`,async({page})=>{

    await page.goto("http://login.salesforce.com")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForLoadState('load')  //wait for the dom element -->attribute / all style js 
    // const title= await page.title()
    // expect(title).toContain('Home')  //partial match  -->non retrying 
   //expect--> default timeout -5s
    await expect(page).toHaveTitle('Home') //retrying
    // await expect(page).toHaveURL('')
    console.log("Assertion for page")
})