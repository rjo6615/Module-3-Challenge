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
    return;
  } else { useLetters = confirm("Use lower case letters?");
           useUppers = confirm("Use upper case letters?");
           useNumbers = confirm("Use numbers?");
           useSpecial = confirm("Use special characters?");
           if (!useLetters && !useUppers && !useNumbers && !useSpecial) {
            alert("You must choose at least one criteria!");
            return;
           }
  }

 // Created an array to make sure each required field is represented in the passwords length.
  var charTypesInPassword = Array(length)
  if (useLetters) {
    var index = Math.floor(Math.random()*length)
    charTypesInPassword[index] = 0
  }
  if (useUppers) {
    while(true) {
      var index = Math.floor(Math.random()*length)
      if (charTypesInPassword[index] == undefined) {
        charTypesInPassword[index] = 1
        break;
      }
    }
  }
  if (useNumbers) {
    while(true) {
      var index = Math.floor(Math.random()*length)
      if (charTypesInPassword[index] == undefined) {
        charTypesInPassword[index] = 2
        break;
      }
    }
  }
  if (useSpecial) {
    while(true) {
      var index = Math.floor(Math.random()*length)
      if (charTypesInPassword[index] == undefined) {
        charTypesInPassword[index] = 3
        break;
      }
    }
  }
  // Generates the password for user
  for(var i = 0; i < length; i++){
    if(charTypesInPassword[i] == undefined) {
      password += generatePassword(useLetters, useUppers, useNumbers, useSpecial)
    } else if(charTypesInPassword[i] == 0) {
      password += generatePassword(true, false, false, false)
    } else if(charTypesInPassword[i] == 1) {
      password += generatePassword(false, true, false, false)
    } else if(charTypesInPassword[i] == 2) {
      password += generatePassword(false, false, true, false)
    } else if(charTypesInPassword[i] == 3) {
      password += generatePassword(false, false, false, true)
    }
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  password = "";
  console.log(charTypesInPassword)
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);