export class EmployeeSignUp{


    public eName: string // if we dont give any modifier it is taken as public
    public eid:string
    protected ephno:number //Restricting to share my phone no. only with my known relation
    private eSalary:number // Resstriction to access salary only to myself and HR


    constructor(){
        this.eName="Ravi"
        this.eid="eid123"
        this.ephno=9898989
        this.eSalary=213123
    }


    printDetails(){
        console.log(`The emp details ${this.eName}:${this.eid}:${this.ephno}:${this.eSalary}`);       


    }


    public get readData(){
        return this.eSalary
    }


    public set writeData(salar:number){
         this.eSalary=salar
    }


}


const emp = new EmployeeSignUp()
emp.printDetails()


let oldsal = emp.readData
console.log(oldsal);


emp.writeData=655656
console.log(emp.readData);








