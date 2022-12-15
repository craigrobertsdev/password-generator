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


let response;
let numSelections = 0;
do{

  // repeat loop until user enters either 'y' or 'n'
  while(true) {
    response = prompt("Include lower case characters? (Y/N):");
    if (response.toLowerCase() === 'y'){
      props.lowercase = true;
      numSelections++;
      break;
    } else if (response.toLowerCase() === 'n') {
      // No need to assign a new value to props.lowercase as it's already false.
      break;
    }
  }

    
  // repeat loop until user enters either 'y' or 'n'
  while(true) {
    response = prompt("Include upper case characters? (Y/N):");
    if (response.toLowerCase() === 'y'){
      props.uppercase = true;
      numSelections++;
      break;
    } else if (response.toLowerCase() === 'n') {
      // No need to assign a new value to props.uppercase as it's already false.
      break;
    }
  }

    
  // repeat loop until user enters either 'y' or 'n'
  while(true) {
    response = prompt("Include numbers? (Y/N):");
    if (response.toLowerCase() === 'y'){
      props.numeric = true;
      numSelections++;
      break;
    } else if (response.toLowerCase() === 'n') {
      // No need to assign a new value to props.numeric as it's already false.
      break;
    }
  }

    
  // repeat loop until user enters either 'y' or 'n'
  while(true) {
    response = prompt("Include special characters? (Y/N):");
    if (response.toLowerCase() === 'y'){
      props.special = true;
      numSelections++;
      break;
    } else if (response.toLowerCase() === 'n') {
      // No need to assign a new value to props.specialChars as it's already false.
      break;
    }
  }
}
while (numSelections === 0);




console.log(numSelections);

  

