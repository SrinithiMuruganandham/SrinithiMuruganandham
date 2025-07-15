
import { PgAction } from "./03-learnInterface";


export abstract class ElementWrapper{ // use the key word "abstract"

//0 to 100 % 
//Not allowed to create object

typeAndTab(locator:string){ // Implemented method
    console.log("Type in the data andtab it");   
}

abstract takeScreenShot():void //unimplemented method/ method signature

}

class Login extends ElementWrapper implements PgAction{
    
    takeScreenShot(): void // method signature
    {
       console.log("screenshot for each test");
       
    }
    handleWindow(): string {
        return "Window Name"
    }
    clearandType() {
        throw new Error("Method not implemented.");
    }
    browserimpl(): void {
        throw new Error("Method not implemented.");
    }
    
}

const login = new Login()
login.typeAndTab("Locator")
login.takeScreenShot()
