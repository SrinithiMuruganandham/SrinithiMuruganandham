

let batonDelivery = new Promise((resolve,reject)=>{

   // let isBatonPassed = true; // The promise is resolved
       let isBatonPassed = false; // The promise is not resolved

    if (isBatonPassed) {
        resolve("Baton is successfully handed over")    }
    else {
        reject("The baton was dropped")
    }
})

batonDelivery
.then(message=>{
    console.log(message);   
})

.catch(error=>{
    console.log(error);
    
})
