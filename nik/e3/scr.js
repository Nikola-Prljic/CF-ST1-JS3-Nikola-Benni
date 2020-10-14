//Write a program that contains two paragraphs. 

//Have an onmouseover event for both of them, 
//that sets their innerHTML to a new random number each time the event is triggered.

//On the same mouseover, call a function that compares the two values and displays a message on the page, 
//stating whether the left or right value is higher.

//U can use the built-in function below to generate a number. That will generate a number between 0 and 100.

//let ranNumber = Math.floor(Math.random() * 101);

document.getElementById("p1").onmouseover = function() {mouseOver()};
let ranNumber = Math.floor(Math.random() * 101)
console.log (ranNumber);
function mouseOver() {
    document.getElementById("p1").innerHTML = ranNumber;
  }