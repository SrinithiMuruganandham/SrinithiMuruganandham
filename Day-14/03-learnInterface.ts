export interface EleAction{
 typeAndEnter(locator:string):void // method signature visible to user
}

export interface PgAction{
    handleWindow():string
}

export interface Browser{
    browserimpl():void
}

export interface PgAction extends Browser{
    clearandType()
}


export class webElement implements EleAction, PgAction{ // webElement is concrete class implemtingh the interface EleAction, PgAction{
    
    clearandType():string {     
        console.log("Hello");
        return "Hello"
        
    }
    browserimpl(): void {
      console.log("launch Browser");
      
    }

    handleWindow():string{

        console.log("HandleWindow");
        return "WindowName"  
    }
    
  typeAndEnter(locator:string):void{
        console.log("login locator");
        
    }


}

const ob = new webElement()
ob.browserimpl()
ob.clearandType()
ob.handleWindow()
ob.typeAndEnter("locator")