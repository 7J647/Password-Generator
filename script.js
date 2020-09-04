//  created four arrays of possible characters to be included in the password

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numerals = [0,1,2,3,4,5,6,7,8,9]
var upperLetters = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacters = ["!","@", "#", "$","%","^","&","*"]

// console.log(lowerLetters,numerals,upperLetters,specialCharacters);

var chosenCharacters = []
// push confirmed character choices in here


// User is prompted for password criteria upon visiting the website.

// The first prompt should be "How many characters do you want in your password (NOTE--min. 8, max 128)"

var howMany = prompt ("How many characters do you want in your new password?  Note--min. = 8, max. = 128");

// console.log(howMany);

  howMany=parseInt(howMany)

  // If they chose a number of characters that falls outside of the range, we need to prompt them to start over.

  if (howMany < 8 || howMany > 128) {
    alert("You did not make a valid selection, please go through the rest of the prompts, refresh the page, and start over");
}

// Next is a series of prompts asking which character types they want to include.

//First prompt is Uppercase.  "Do you want to include any UPPERCASE letters?"
var confirmUpper = confirm ("Do you want to include any UPPERCASE letters?");
// console.log(confirmUpper);

//Here we are pushing the Uppercase letters into the pool of chosen characters from which to randomly generate the password"
//we are using .concat because using push would push an array inside the new array, rather than just having one array

if (confirmUpper) {
  chosenCharacters = chosenCharacters.concat(upperLetters)
}

//Next prompt is lowercase.  "Do you want to include any LOWERCASE letters?"
var confirmLower = confirm ("Do you want to include any lowercase letters?"); 

//Here we are pushing the lowercase letters into the pool of chosen characters
  if (confirmLower) {
    chosenCharacters = chosenCharacters.concat(lowerLetters)
  }
//Next prompt is numeric.  "Do you want to include any numerals?"
var confirmNumeral = confirm ("Do you want to include any numerals?");

//Here we are pushing the lowercase letters into the pool of chosen characters
  if (confirmNumeral) {
  chosenCharacters = chosenCharacters.concat(numerals)
}

//Last prompt is for special characters.  "Do you want to include any special characters like "&", "%", etc."
var confirmSpec = confirm ("Do you want to include any special characters like the ampersand, percent sign, or similar symbols?");

//Here we are pushing the lowercase letters into the pool of chosen characters
if (confirmSpec) {
  chosenCharacters = chosenCharacters.concat(specialCharacters)
}
// console.log(chosenCharacters);

//The input is now validated to make sure that it meets the number of characters, has at least one type of character chosen, and has one of each character type chosen.


if (confirmLower!==true && confirmUpper!==true && confirmNumeral!==true && confirmSpec!==true) {
  alert("You did not choose any characters, please refresh the page and start over");
}

//created an empty array to push the password characters into
var password = []


// combined Math.floor(Math.random) and a forLoop to generate a random password character from .chosenCharacters,
// push it to the password array, and have the forLoop run the same amount of times as the number of characters
// user chose (howMany), pushing those into the password array.

for (var i = 0; i < howMany; i++) {
  passwordChar = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  password.push(passwordChar)
}

// console.log(password)

// The password is generated and alerted to the user
alert("Your password is " + password)

// alert("Your password is " password);

