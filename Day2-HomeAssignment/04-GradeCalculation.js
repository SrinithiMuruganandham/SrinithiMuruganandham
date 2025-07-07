
// switch 
function gradeCalculation(studentScore){
    switch(true){
        case(studentScore>=90 && studentScore<=100):
        console.log("Grade is A "+studentScore)
        return 'A';
    case(studentScore>=70 && studentScore<=89):
        console.log("Grade is B "+studentScore)
        return 'B';
    case(studentScore>=50 && studentScore<=69):
        console.log("Grade is C "+studentScore)
        return 'C';
    case(studentScore>=35 && studentScore<=49):
        console.log("Grade is D "+studentScore)
        return'D' ;
    default:
        return "Fail";
        
    }

}
let studentScore=90;
console.log("The Returned Grade is "+gradeCalculation(studentScore));


// If else condition
let marks=10;
gradeCalculation1();
function gradeCalculation1(){
    if(marks>=90 && marks<=100)
    {
        return 'A';
    }
    else if(marks>=75 && marks<=89)
    {
        return 'B';
    }
    else if(marks>=50 && marks<=74)
    {
        return 'C';
    }
    else
    {
        return "Invalid";
    }
}
console.log("The grade for the mark "+ marks+" is "+gradeCalculation1())


