import { test } from "@playwright/test";
import dotenv from "dotenv";
let fileName = process.env.envFile || 'qa'

dotenv.config({ path: "Data/${fileName}.env" })
//dotenv is the library and fetches data from qa.env


test(`Read the data from env file`, async ({ page }) => {
  console.log(process.env.BaseUrl);
  //   console.log(process.env.username);
  console.log(process.env.LF_Username);


  let url = process.env.BaseUrl as string
  let username = process.env.LF_Username as string
  let password = process.env.LF_Password as string



  await page.goto(url)


  await page.fill("#username", username)


  await page.fill("#password", password)


  await page.click(".decorativeSubmit")
  //process gives the system process and connects to the environment variable os that system


})