//Create an HTML document inviting the user to use input fields 
//for a car's age, horsepower and buying price to calculate a fictional insurance price.

//Use try and catch statements to create a custom error message for the incorrect inputs in those fields.

//Lastly, create a logic for calculating that insurance-price and output it to your HTML page. 


function myFunction() {
    var message;
    message = document.getElementById("p1");
    message.innerHTML = "";
    var a = document.getElementById("age").value;
    var p = document.getElementById("ps").value;
    var b = document.getElementById("buy").value;
   
  document.getElementById('p1').innerHTML = a +"-"+ p +"-"+ b;
  var care = Math.abs((p*2)+(b/100*5)-(a*10));
  console.log(care);
  try {
    if(a == '' || p == '' || b == '')  throw "Someting is missing";
    if(isNaN(a) || isNaN(p) || isNaN(b)) throw "not a number";
    if(a <= 0 || p <= 0 || b <= 0)  throw "enter more than zero";
    if(a > 40) throw "Car is to old";
    if(p > 1000) throw "Is this car street legal?"
    //if(b == '')  throw  "buing price is Empty";
    //if(a == ''||p == ''||b == '') throw "someting"
    }
    catch(err) {
        message.innerHTML = err;
      }
  
}