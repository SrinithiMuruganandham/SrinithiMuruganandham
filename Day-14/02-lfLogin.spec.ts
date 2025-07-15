
import { test } from "@playwright/test";
import { LoginPage } from "./01-lfLogin";

test(`Login verification`,async ({page}) => {
    

    const login = new LoginPage(page) // constructor is called immediately after the creation of the object
    await login.loadurl(`http://leaftaps.com/opentaps/control/main`);
    await login.enterCredentials("demoCSR", "crmsfa");
    await login.clickLogin();


})