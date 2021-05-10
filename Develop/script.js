// Define Variable 
var userInput = []
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
generatePassword = ["#password"]

// Create a function for generating password 
function generatePassword() {

  // User Input
  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  // Running loop to check if variables are false
  while (!(uppercase || lowercase || numbers || symbols)) {
    alert("You must select at least one character type!");
    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    numbers = confirm("would you like to use numbers?");
    symbols = confirm("would you like to use special characters?");

    // Generate password function
    var plength = parseInt(prompt("How many characters does your password need? Please pick a number between 8 and 128."));
    while (plength < 8 || plength > 128 || typeof (plength) != "Number" || plength === NaN || plength === null) {
      alert("Please choose a password length between 8 and 128.");
      plength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    }
    // If character type is selected, the array name is stored into a group array
  if (lowercase == true) {
    caseArray.push(lowercase);
  }
  if (uppercase == true) {
    caseArray.push(uppercase)
  }
  if (numbers == true) {
    caseArray.push(numbers)
  }
  if (symbols == true) {
    caseArray.push(symbols)
  }
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  };

  generatePassword();
};

passwordEntry.textContent = passwordString;

let generateButton = document.getElementById("#generate");
let passwordEntry = document.getElementById("#password");
generateButton.onclick = generatePassword;