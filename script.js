// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var HowMany=prompt("How many characters do you want in your new password?");

// Pseudocode

// After the button is clicked, user is prompted for password criteria.

// Clicking the button starts the process so no need to ask "do you want to 
// generate a password?"

// Therefore the first prompt should be "How many characters do you want in your password (NOTE--min. 8, max 128)"

// This is assigned a value.

// Next is a series of prompts asking which character types they want to include.

//First prompt is Uppercase.  "Do you want to include any UPPERCASE letters?"

//Next prompt is lowercase.  "Do you want to include any LOWERCASE letters?"

//Next prompt is numeric.  "Do you want to include any numerals?"

//Last prompt is for special characters.  "Do you want to include any special characters like "&", "%", "@", etc."

//The input is now validated to make sure that it meets the number of characters and has one of each character type chosen.

//the password is generated 

//the password is either displayed in an alert or written to the page.