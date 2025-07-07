// function reversalName(){
//     let companyName="Testleaf"
//     let splitName=companyName.split("")
//     //console.log(splitName);

//     let ReverseArray=splitName.reverse();
//     //console.log(ReverseArray)
//     let joinArray= ReverseArray.join("");
//     console.log(joinArray);
// }
// reversalName();


// let reverse= companyName.split("").reverse().join("")
//console.log(reverse);


let company="Testleaf";
function company1(){
let newCompany="";
for (i=company.length-1;i>=0;i--){
    newCompany+=company[i]
    
}
return newCompany

}
console.log(company1(company))