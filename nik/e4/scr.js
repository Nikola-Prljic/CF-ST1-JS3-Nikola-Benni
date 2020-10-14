//a- Write a function called ageCalculator() that takes two arguments birth year and the current year. 
//Calculate 2 possible ages based on those years (two, because we don't know the birth month).

//You should get the following results:

//You are either 29 or 28

//b- Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in.
// Provide the same results just passing one argument.

//You should get the following results:

//You are either 29 or 28
onload=ageCalculator();

function ageCalculator(){
    var currentyear = new Date();
    var age1 = Math.abs(currentyear.getUTCFullYear() - 1991);
    var age2 = age1 - 1;
    console.log(currentyear);
    console.log(age1);
    document.getElementById("p1").innerHTML = "You are either " + age1 + " or " + age2;
    

}