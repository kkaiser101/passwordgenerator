
function generatePassword(){
  var passwordLength = Number(prompt("How many charcters will your password be? Enter a number between 8 and 128: ")),
  characterTypesuppercase = prompt("Will your password have an uppercase letter? Enter 'y' or 'n': "),
  characterTypeslowercase = prompt("Will your password have a lowercase letter? Enter 'y' or 'n': "),
  characterTypesnumber = prompt("Will your password have a number? Enter 'y' or 'n': "),
  characterTypesspecial = prompt("Will your password have a special character? Enter 'y' or 'n': "),
  confirmType = confirm("Please confirm what your password will include:\nUppercase: " + characterTypesuppercase + "\nLowercase: " + characterTypeslowercase + "\nNumber: " + characterTypesnumber + "\nSpecial Character: " + characterTypesspecial);

  if(characterTypesuppercase == "n" && characterTypeslowercase == "n" && characterTypesnumber == "n" && characterTypesspecial == "n"){
    alert("Password must have atleast one of the character types");
    return "Your Secure Password";
  }

  if(characterTypesuppercase == "y"){
    const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  } else{
    const uppercase = [];
  }

  if(characterTypeslowercase == "y"){
    const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  } else{
    const lowercase = [];
  }

  if(characterTypesnumber == "y"){
    const number = ["1","2","3","4","5","6","7","8","9"];
  } else{
    const number = [];
  }

  if(characterTypesspecial == "y"){
    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];
  } else{
    const special = [];
  }

  const combination = uppercase.concat(lowercase,number,special);

  var generator = combination,
      rPassword = "";

  for(var i = 0, n = generator.passwordLength; i < passwordLength; ++i){
    rPassword = generator.charAT(Math.random() * n);
  }


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
