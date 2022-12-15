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

function generatePassword() {

  // All character types
  const characterTypes = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    uppercase: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
    numerical: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    special: [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
    }

  let passwordLength = 0;
  const password = [];
  let selectedTypes = [];
  
  // Prompt user to choose password length
  while (passwordLength < 8 || passwordLength > 128) {
    let numChars = prompt('Choose a password length between 8 and 128 characters:');

    // only modify props.passwordLength if within the required range, otherwise repeat until user does so 
    if (numChars >= 8 && numChars <= 128) {
      passwordLength = numChars;
    }
  }

  // Continue prompting user until they have chosen at least one character type
  while (selectedTypes.length === 0) {
    selectedTypes = promptUser();
  }

  // Generate random password 
  for (let i = 0; i < passwordLength; i++) {
    const type = randomInteger(selectedTypes.length);
    const index = randomInteger(selectedTypes[type].length);

    password.push(selectedTypes[type][index]);
  }

  // Convert password array into string

  const passwordString = password.join('');

    return passwordString;
  }

  // iterates over characterTypes and prompts user to select each one individually
  function promptUser() {
    const selected = [];

    for(const type in characterTypes) {
      if(confirm(`Use ${type} characters?`)) {
        selected.push(characterTypes[type]);
      }
    }

    return selected; 
}

function randomInteger(max) {
  return Math.floor(Math.random() * max);
}