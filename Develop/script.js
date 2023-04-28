// Assignment code here
const specials = [];
const lowers = [];
const uppers = [];
const numerics = [];


function passCriteria(){
  passNum = prompt("How long is your password? "+"A minimum of 8 please! " ),passSpecial = prompt("Would you like special characters?")
  ,passLower = prompt("Would you like lowercase letters?"),passUpper = prompt("Would you like uppercase letters?")
  ,passNum = prompt("Would you like numbers?")
}



// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passCriteria);

