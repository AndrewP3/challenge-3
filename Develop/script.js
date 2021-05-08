// Generate password function
  var plength = prompt("How many characters does your password need? Please pick a number between 8 and 128.");

  while (plength < 8 || plength > 128) {

    if (plength >= 8 && plength <= 128) {
      alert("You chose" + plength)
    }
    else {
      prompt("Please choose a password length between 8 and 128.")
    }
  };

  var userInput = []

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

  if (confirm("Does your password require lowercase letters?") == true) {
    userInput.push(lowercase)
  }
  if (confirm("Does your password require uppercase letters?") == true) {
    userInput.push(uppercase)
  }
  if (confirm("Does your password require numbers?") == true) {
    userInput.push(numbers)
  }
  if (confirm("Does your password require special characters?") == true) {
    userInput.push(special)
  }
  console.log(userInput);

// Get references to the #generate element
generateBtn.addEventListener("click", () => {
  let characters = lowercase;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += special) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

var generateBtn = document.querySelector("generate");
var result = document.querySelector("h2");

// Write password to the #password input
function generate(passwordLength) {
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var arrs = userInput[Math.floor(Math.random() * userInput.length)];
    var digital = arrs[Math.floor(Math.random() * arrs.length)];
    password += digital;
  }

  console.log("password", password);
  return password
}

// This is to generate password button functionality 
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

document.getElementbyId("generate").addEventListener("click", function () {
  var password = generate(plength)
  document.getElementById("password").value = password;
});