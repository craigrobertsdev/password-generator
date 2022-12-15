// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// create array of strings for each lowercase letter of alphabet
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');

// create uppcase array using similar method
const uppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
'.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

const generatePassword = () => {
// object to track the user choices for password generation
const props = {
  passwordLength: 0,
  uppercase: false,
  lowercase: false,
  numeric: false,
  specialChars: false,
};

while (props.passwordLength < 8 || props.passwordLength > 128) {
  let numChars = prompt('Choose a password length between 8 and 128 characters:');

  // only modify props.passwordLength if within the required range, otherwise repeat until user does so 
  if (numChars >= 8 && numChars <= 128) {
     props.passwordLength = numChars;
  }
}


let numSelections = 0;
do{

props.lowercase = confirm("Use lower case letters?")
if (props.lowercase) {
  numSelections++;
}

props.uppercase = confirm("Use upper case letters?")
if (props.uppercase) {
  numSelections++;
}

props.numeric = confirm("Use numbers?")
if (props.numeric) {
  numSelections++;
}

props.specialChars = confirm("Use special characters?")
if (props.specialChars) {
  numSelections++;
}
}
while (numSelections === 0);

// push generated password into array
// join together into string


console.log(numSelections);

  
}

