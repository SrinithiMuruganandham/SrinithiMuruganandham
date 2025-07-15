

class ElementActions {
//method signature
    public click(element:string):void
    public click(element:string, forceClick:boolean):void

    //Single implementation

    public click(element:string,forceClick?:boolean){

        if(forceClick){
            console.log(`Forcible clicking the elment ${element}`);
            
        }else{
            console.log(`Clcikcing the element ${element} normally`);
            
        }
    }
}

const actions = new ElementActions();
actions.click("#Login")