
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var newPassword = '';

  //storing strings of the characters in four variables. 
  var lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseAlphabet = lowercaseAlphabet.toUpperCase();
  var specialList = "!\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~"
  var numberList = "0123456789";

  var lengthCrit = prompt('How long would you like your password to be?', 'Should be 8-128 characters');
  
  //have to convert lengthCrit from string to number
  lengthCrit = Number(lengthCrit);
  

  if (lengthCrit < 8 || lengthCrit > 128) {
    alert('Enter a valid number between 8-128') //user needs to valid input to continue
  } else if (isNaN(lengthCrit)) {
    alert('Enter numbers only');
  } else {
    var lowercaseCrit = confirm('Click OK to confirm that you want to include lowercase letters in your password');
    var uppercaseCrit = confirm('Click OK to confirm that you want to include uppercase letters in your password');
    var numberCrit = confirm('Click OK to confirm that you want to include numbers in your password');
    var specialCrit = confirm('Click OK to confirm that you want to include special characters (e.g. %#$@) in your password');
  } 
  
  //User needs to select at least one criteria to proceed
  if (!lowercaseCrit && !uppercaseCrit && !numberCrit && !specialCrit) {
    alert("Please select at least one character criteria")
  };

  var char = ''; 
  
  if (lowercaseCrit) {
    char += lowercaseAlphabet;
  }
  if (uppercaseCrit) {
    char += uppercaseAlphabet;
  }
  if (numberCrit) {
    char += numberList;
  }
  if (specialCrit) {
    char += specialList;
  }

  for (var i = 0; i < lengthCrit; i++) {
    newPassword += char.charAt(Math.floor(Math.random() * char.length));
  }

  return newPassword
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

