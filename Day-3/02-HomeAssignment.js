// split, join metod
 let stringName="madam"
function reverseString(){
    let SplitString= stringName.split("");
    console.log(SplitString);
    let reversal= SplitString.reverse("");
    console.log(reversal)
    let concatenateSrtring= reversal.join("");
    console.log(concatenateSrtring);
    return concatenateSrtring;

}
reverseString();
function palindromeCheck(){
    if(stringName===reverseString()){
        return 'true';

}
    else{
    return 'False'
}
}
console.log(palindromeCheck())

// Iteration method
let stringUser="mommom"
function reverseUser(){
    let resultUser=""
    for (let i=stringUser.length-1;i>=0;i--){
        resultUser+=stringUser[i]

    }
    return resultUser;
}
console.log(reverseUser())
function palCheck(){
    if(stringUser===reverseUser()){
        return 'true'
    }
    else{
        return 'false'
    }
}
console.log(palCheck());


//Hello World -Example 1
let stringLength="Hello World";
let lengthArray= stringLength.split(" ");
console.log(lengthArray);
let length=lengthArray[1].length;
console.log(length)


//Example 2
let s = " fly me to the moon ";
function TrimLength(){
let trimWord=s.trim();
console.log(trimWord);
let splitWord= trimWord.split(" ");
console.log(splitWord)
let lengthWord= splitWord[4].length;
return lengthWord;
}
console.log(TrimLength())


//Anagram

function isAnagram(str1,str2){
    const anagram= str=>str.toLowerCase().split("").sort().join('');
    return anagram(str1)=== anagram(str2)
}
console.log(isAnagram('listen','silent'))
console.log(isAnagram('hello','world'))