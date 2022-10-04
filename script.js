//declare variables
var passwordLength;
var uppercase;
var lowercase;
var number;
var special;
var combination;
var rPassword = "";
// password function
function generatePassword(){
  var passwordLength = Number(prompt("How many charcters will your password be? Enter a number between 8 and 128: ")),
  characterTypesuppercase = prompt("Will your password have an uppercase letter? Enter 'y' or 'n': "),
  characterTypeslowercase = prompt("Will your password have a lowercase letter? Enter 'y' or 'n': "),
  characterTypesnumber = prompt("Will your password have a number? Enter 'y' or 'n': "),
  characterTypesspecial = prompt("Will your password have a special character? Enter 'y' or 'n': "),
  confirmType = confirm("Please confirm what your password will include:\nUppercase: " + characterTypesuppercase + "\nLowercase: " + characterTypeslowercase + "\nNumber: " + characterTypesnumber + "\nSpecial Character: " + characterTypesspecial);


  //if the user says no to all character types they will be prompted with this:
  if(characterTypesuppercase == "n" && characterTypeslowercase == "n" && characterTypesnumber == "n" && characterTypesspecial == "n"){
    alert("Password must have atleast one of the character types");
    return "Your Secure Password";
  }

//the user will be asked to answer 'y' or 'n' for what kind of characters they want their password to have.

  if(characterTypesuppercase == "y"){
    //uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else{
    uppercase = "";
  }

  if(characterTypeslowercase == "y"){
    //lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    lowercase = "abcdefghijklmnopqrstuvwxyz";
  } else{
    lowercase = "";
  }

  if(characterTypesnumber == "y"){
    //number = ["1","2","3","4","5","6","7","8","9"];
    number = "0123456789";
  } else{
    number = "";
  }

  if(characterTypesspecial == "y"){
    //special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];
    special = "!@#$%^&*(){}";
  } else{
    special = "";
  }

  const combination = uppercase.concat(lowercase,number,special);

console.log(combination);

  for(var i = 0; i < passwordLength; i++){
    rPassword += combination.charAt(Math.random() * combination.passwordLength);
    console.log(rPassword);
  }
  // console.log(combination[Math.random() * combination.passwordLength])
  // console.log(rPassword);


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
