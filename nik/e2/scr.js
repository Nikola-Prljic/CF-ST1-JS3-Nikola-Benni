//Within the console, create a Function “price” 
//that takes three parameters and returns the sum of these three parameters. 
//Output the result in the console.
x = price (5,10,20);
function price(){
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
    return sum;
}
console.log (x);