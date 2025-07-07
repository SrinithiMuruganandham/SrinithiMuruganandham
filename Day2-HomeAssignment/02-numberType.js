
function numberType(number){
    
    if(number>0){
        return("The number is positive "+number)
    }
    else if(number<0){
       return("The number is negative "+number)      
    }
    else{
        return("The number is neutral "+ number)
    }
}
let number=-9;
let result= numberType(number)
console.log(result)
