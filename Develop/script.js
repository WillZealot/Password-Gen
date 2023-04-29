// Assignment code here
const specials = "@#$%^&*()_~|}{[]></-=";
const lowers = "abcdefgjijklmnopqrstuvwxyz";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerics = "0123456789";
const allChars = specials + lowers + uppers + numerics;


function passCriteria(){
  passNum = prompt("How long is your password? "+"A minimum of 8 please! " ),passSpecial = prompt("Would you like special characters?")
  ,passLower = prompt("Would you like lowercase letters?"),passUpper = prompt("Would you like uppercase letters?")
  ,passNum = prompt("Would you like numbers?")
}

/*function getRandomUpper(){
  password += uppers[Math.floor(Math.random() * uppers.passNum)];
}
function getRandomLower(){
  password += lowers[Math.floor(Math.random() * lowers.passNum)];
}
function getRandomSpecials(){
  password += specials[Math.floor(Math.random() * specials.passNum)];
}
function getRandomNumerics(){
  password += numerics[Math.floor(Math.random() * numerics.passNum)];
} */

function generatePassword();{
  if (passSpecials === "yes");
} + getRandomSpecials();{
} if (passSpecials != "yes");


/*while(passNum > password.passNum){
  password += allChars[Math.floor(Math.random() * uppers.passNum)];
}*/



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

