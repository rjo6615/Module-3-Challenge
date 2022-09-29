// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersUpper = letters.map(element => {
  return element.toUpperCase();
});
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// get backslash to work

var passwordLength = 8;

var lettersChoice = true;
var lettersUpperChoice = true;
var numbersChoice = true;
var specialChoice =  true;

console.log(special);

// functions

function generateCharacter(useLetters, useUppers, useNumbers, useSpecial) {
  var set = []
  if (useLetters) set = set.concat(letters)
  if (useUppers) set = set.concat(lettersUpper)
  if (useNumbers) set = set.concat(numbers)
  if (useSpecial) set = set.concat(special)
  return set[Math.floor(Math.random() * set.length)];
}

// execution
var password = ""
var length = 8

for(var i = 0; i < length; i++){
  password += generateCharacter(false, true, true, true)
}

console.log(password);





// testing
// console.log(generatePassword());





// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);