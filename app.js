let display = document.getElementById("display");


function appendToDisplay(value) {
 display.value += value;
 console.log(value);
}
function clearDisplay() {
 display.value = " ";
}



 function solve() {
   try {
    let b = document.getElementById("display").value;
   display.value  = eval(b); 
}
catch(err) {
display.value = "Error, try again";
}
  }


