
import { welcomePage } from "./welcomePage";


class HomePage extends welcomePage{
    lppage: any;


    async clickLeads() {
        await this.lppage.click("//a[text()='Leads']")
    }

  async clickAccounts() {
        await this.lppage.click("//a[text()='Leads']")
    }

    async clickContact(){
         await this.lppage.click("//a[text()='Leads']")
    }
    
}
