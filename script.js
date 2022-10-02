// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersUpper = letters.map(element => {
  return element.toUpperCase();
});
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// get backslash to work

var password = "";
var useLetters;
var useUppers;
var useNumbers;
var useSpecial;

// functions

function generatePassword(useLetters, useUppers, useNumbers, useSpecial) {
  var set = []
  if (useLetters) set = set.concat(letters)
  if (useUppers) set = set.concat(lettersUpper)
  if (useNumbers) set = set.concat(numbers)
  if (useSpecial) set = set.concat(special)
  return set[Math.floor(Math.random() * set.length)];
}

// Write password to the #password input


function writePassword() {
  var length = prompt("Please enter password length");
  if (length === null) {
    return;
  }
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
  } else { useLetters = confirm("Use lower case letters?");
           useUppers = confirm("Use upper case letters?");
           useNumbers = confirm("Use numbers?");
           useSpecial = confirm("Use special characters?");
           if (!useLetters && !useUppers && !useNumbers && !useSpecial) {
            alert("You must choose at least one criteria!");
            return;
           }
  for(var i = 0; i < length; i++){
    password += generatePassword(useLetters, useUppers, useNumbers, useSpecial)
  } 
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  password = "";
};

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);