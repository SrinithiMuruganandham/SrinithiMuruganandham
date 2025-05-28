var genderType='Female';// global declaration
function printGender(){
let color='rose'// function scope
if(gender.startsWith("female"))
{
    var age=30;
    let color='pink';
    console.log("she/her favourite color is " + color)// here color is declared using let variable
    }
    else{
        var age=20;
    
    console.log("she/her favourite color is " + color)
    }
    console.log(age)
    //console.log(color)
}
printGender()