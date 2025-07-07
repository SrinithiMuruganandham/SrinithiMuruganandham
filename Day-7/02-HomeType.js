//Factorial  calculation
function factorialCalc(n) {
    if (n < 0) {
        console.log("Negative number should not used for factorial");
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorialCalc(-2));
// fibonnaci sequence
function fibonnaciSeq(n) {
    if (n >= 0) {
        console.log("Fibonnaci is not for Negative integers");
    }
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var n1 = 0;
    var n2 = 1;
    for (var i = 2; i < n; i++) {
        var current = n1 + n2;
        n1 = n2;
        n2 = current;
    }
    return n2;
}
console.log("fibonacci(0) = ".concat(fibonnaciSeq(0))); // Output: 0
console.log("fibonacci(1) = ".concat(fibonnaciSeq(1))); // Output: 1
console.log("fibonacci(5) = ".concat(fibonnaciSeq(5))); // Output: 5
console.log("fibonacci(10) = ".concat(fibonnaciSeq(10))); // Output: 55
console.log("fibonacci(20) = ".concat(fibonnaciSeq(20)));
//Promise
function fetchDataFromDatabase() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var data = true;
            if (data) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data not found!");
            }
        }, 3000);
    });
}
fetchDataFromDatabase()
    .then(function (message) {
    console.log(message);
})
    .catch(function (error) {
    console.error();
});

//Occurence of an number
const nums = [2,4,5,2,1,2];
const k=2;
function countOccurence(nums,k){
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===k){
            count++;
        }
    }
    return count;
    
}
console.log(countOccurence(nums,k))


// sum of n values
function sumofN(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    
       

    }
     return sum;
}
console.log(sumofN(5))



