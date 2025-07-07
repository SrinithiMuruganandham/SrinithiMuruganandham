
import { EmployeeSignUp } from "./04-accessModifier";
import { FakerData } from "./faker_static";




class HR extends EmployeeSignUp{

    empUpdate(){
      //  this.ephno=6666678 // you can rewrite the phone numbner or print the number
       console.log(this.ephno);
       console.log(FakerData.getFirstName());
       
        
    }
    
}

let emp = new HR
emp.empUpdate()
