let passwordBox = document.querySelector("#Password");
let length = 16;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChar = "!@#$%^&*()_+/*-+<>?";
let allChar = upperCase + lowerCase + number + specialChar;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  //   console.log(password);

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
