
// Scientific Calculator using eval()

// Function to evaluate the expression
function calculate() {
 // Get the input value from the display
 var expression = document.getElementById('display').value;
 
 try {
     // Evaluate the expression using eval()
     var result = eval(expression);
     
     // Display the result
     document.getElementById('display').value = result;
 } catch (error) {
     // Display error if there's an issue with evaluation
     document.getElementById('display').value = 'Error';
 }
}

// Function to add characters to the display
function addToDisplay(char) {
 document.getElementById('display').value += char;
}

// Function to clear the display
function clearDisplay() {
 document.getElementById('display').value = '';
}