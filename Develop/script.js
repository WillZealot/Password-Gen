// Assignment code here
// Section 1 My Variables for the password so cool awesome!
const specials = "@#$%^&*()_~|}{[]></-=";
const lowers = "abcdefgjijklmnopqrstuvwxyz";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerics = "0123456789";
const allChars = specials + lowers + uppers + numerics;


// Get references to the #generate element
document.getElementById("#generate");
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Section 2 creating the password function begins!
function writePassword(){
  let password = "";
  let passNum = prompt("Hello Awesome Human! How Long Would you like your password?");{
  //right here i created a if statement that determines if my pass length is not less than 8. if it is the page will stop all prompts and restart the process with a swaggy little alert
  if (passNum < 8) {
    alert("Oops silly me ! I forgot to mention it must be a value more than or equal to 8 :) Hit the generate password again to try again!");
    // location.reload reloads the page to reset the prompts
    location.reload();
    return; // this return literally does nothing! isnt it awesome
  }
  }
  //section 3 these are all my prompts that will be collecting input for the password
  let passSpecial = prompt("Would you like special characters?");
  let passLower = prompt("Would you like lowercase letters?");
  let passUpper = prompt("Would you like uppercase letters?");
  let passNumeric = prompt("Would you like numbers?");
//section 4 my sick while loop
  // this converts the string in passNum to a integer amazing wowwie
  let passwordLength = parseInt(passNum);
  // this while look checks if my passwords length is what th euser inputed or just more than 8 and it continues to execute until the passwords length is how much was entered
  while (password.length < passwordLength) {
    if (passUpper === "yes") {
      password += uppers[Math.floor(Math.random() * uppers.length)];
    }
  
    if (passLower === "yes") {
      password += lowers[Math.floor(Math.random() * lowers.length)];
    }
  
    if (passSpecial === "yes") {
      password += specials[Math.floor(Math.random() * specials.length)];
    }
  
    if (passNumeric === "yes") {
      password += numerics[Math.floor(Math.random() * numerics.length)];
    }
  }

  // this trims my password down if its to long !!!
  password = password.slice(0, passwordLength);

  let passwordText = document.querySelector("#password");
  passwordText.value = password;{
}

}

//section 5 the event listener
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.addEventListener("load", function load( e ){ 
  // Remove the load event 
  window.removeEventListener( "load", load, false );
  // Set the body opacity to 1
  document.body.style.opacity = 1;

})
