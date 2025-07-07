
import { LoginPage } from "./03-loginPage";


export class welcomePage extends LoginPage{
async clickCRM() {
        await this.lppage.click("text=CRM/SFA")

    }

    async clickLoginogout() {
       

    }

}

