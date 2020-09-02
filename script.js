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

// After the button is clicked, user is prompted for password criteria.

// Clicking the button starts the process so no need to ask "do you want to 
// generate a password?"

// Therefore the first prompt should be "How many characters do you want in your password (NOTE--min. 8, max 128)"

var howMany = prompt ("How many characters do you want in your new password?");
console.log(howMany);

// Next is a series of prompts asking which character types they want to include.

//First prompt is Uppercase.  "Do you want to include any UPPERCASE letters?"
var confirmUpper = confirm ("Do you want to include any UPPERCASE letters?");

//Next prompt is lowercase.  "Do you want to include any LOWERCASE letters?"
var confirmLower = confirm ("Do you want to include any lowercase letters?");

//Next prompt is numeric.  "Do you want to include any numerals?"
var confirmNumeral = confirm ("Do you want to include any numerals?");

//Last prompt is for special characters.  "Do you want to include any special characters like "&", "%", etc."
var confirmSpecChar = confirm ("Do you want to include any special characters like the ampersand, percent sign, or similar symbols?");

//The input is now validated to make sure that it meets the number of characters, has at least one type of character chosen, and has one of each character type chosen.


//the password is generated 

//the password is either displayed in an alert or written to the page.