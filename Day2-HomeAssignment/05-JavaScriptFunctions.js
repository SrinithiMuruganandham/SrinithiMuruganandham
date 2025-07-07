//Function Declaration

// one method

function userProfile(name){
    
    return("Hello "+ name+"!")
}
console.log(userProfile("nithi"))

// another method
function userProfile1(){
    let name="Sri";
    console.log("Hello "+ name+"!")
}
userProfile1();

//Arrow Function

let double=a=>a*2;
console.log(double(4))

//Anonymous function
setTimeout(function() {
    console.log("This message is delayed by 2 seconds")
    
}, 2000);

// callback function
function getUserData(callback){
    setTimeout(function(){

        const user={name:"Sri",age:24}
        callback(user)
    },
3000)


}
getUserData(function(user){
    console.log("Name is" + user.name)
    console.log("age is" + user.age)

})
