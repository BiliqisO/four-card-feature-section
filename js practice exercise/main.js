/* Exercise  1:

Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100 

*/



function isEqualTo100(a, b){

    if   (a == 100 || b == 100 ||a+ b == 100)  {
        return "true";
    }
    return "false";
}
console.log(isEqualTo100(20, 80));


function hiThere(val){
    if(val == "me" ){
        return "I love you";
    }
    return "I do not love you";
}
console.log(hiThere("me"));