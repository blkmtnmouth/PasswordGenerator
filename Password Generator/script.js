// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
  function generatePassword() {

    var lowChar = "abcdefghijklmnopqrstuvwxyz"; 
    var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var numbChar = "1234567890"; 
    var specChar = "!@#$%^&*()_+"; 

    var passLength = prompt ("How long do you want your password to be? "); 

    if (passLength < 8 || passLength > 128){
      alert ("your password needs to be 8-128 characters. ");
    }

    var lowerCase = confirm ("Do you want lowercase letters? ");
    var upperCase = confirm ("Do you want uppercase letters? ");
    var numReg = confirm ("Do you want numbers? ");
    var special  = confirm ("Do you want special characters in your password? ");




    else if (lowerCase === false && upperCase === false && numReg === false && special === false){
      alert ("You need to pick at least one option ");
    }

    console.log(lowerCase);
    console.log(upperCase);
    console.log(numReg);
    console.log(special);
    console.log(passLength);


    else {

      

    }

      

    
      
    
    

  }

  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
