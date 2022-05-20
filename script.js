// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible choices of password
var numbers = ["0","1","2","3","4","5","6","7","8","9","0"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ["~","!","@","#","$","%","^","&","*","(",")","-","=","+",",",".","/","?",";",":"];

var passwordLength = window.prompt("Enter password length between 8 and 128 characters")
var numbers = window.confirm("Password to include numbers?");
var upperCase = window.confirm("Password include upper case letters?");
var lowerCase = window.confirm("Password include lower case letters?");
var symbols = window.confirm("Password to include symbols?");
// Requirements of the password
var askQuestions = function(){
  var isValid = false;
  do {
  var passwordLength = window.prompt("Enter password length between 8 and 128 characters");
  var numbers = window.confirm("Password to include numbers?");
  var upperCase = window.confirm("Password include upper case letters?");
  var lowerCase = window.confirm("Password include lower case letters?");
  var symbols = window.confirm("Password to include symbols?");
  var responses = {
    numbers : numbers,
    upperCase : upperCase,
    lowerCase : lowerCase,
    symbols : symbols
  }
  if (passwordLength<8 || passwordLength>128)
    alert ("Please pick the length between 8 and 128");
    else if (!numbers&&!upperCase&&!lowerCase&&!symbols)
    alert ("Please choose at least one type");
    else isValid = false
} while (!isValid);
return responses;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordRequirements=questions();
  var combo=[];
  var password=""

  if (passwordRequirements.numbers){
    for(var i of numbers)
    combo.push(i)
  } if (passwordRequirements.upperCase){
    for (var i of upperCase)
    combo.push(i)
  } if (passwordRequirements.lowerCase){
    for (var i of lowerCase)
    combo.push(i)
  } if (passwordRequirements.symbols){
    for (var i of symbols)
    combo.push(i)
  }
  
  console.log(combo);

  var index = Math.floor(Math.random()*combo.numbers);
  var password = options[index];
}
{
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}