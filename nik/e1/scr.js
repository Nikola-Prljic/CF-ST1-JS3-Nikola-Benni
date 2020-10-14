onload=WarningMsg();
function WarningMsg() {
    alert("This is a warning message!");
    document.getElementById('p1').innerHTML = ("This is a warning message!");
     var retVal = confirm("Do you want to continue ?");
     if(retVal == true){
        document.getElementById('p2').innerHTML = ("User wants to continue!");    
     }
     else{
        document.getElementById('p2').innerHTML = ("User does not want to continue!");    
     }
    }

  onload=getValue(); 
    function getValue(){
        var retVal = prompt("Enter your name : " , "your name here");
        document.getElementById('p4').innerHTML =("You have entered : " + retVal);
       }