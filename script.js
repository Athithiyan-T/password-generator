const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?";

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  let length = lengthEl.value;
  let chars = "";
  let password = "";

  if (uppercaseEl.checked) chars += upper;
  if (lowercaseEl.checked) chars += lower;
  if (numbersEl.checked) chars += numbers;
  if (symbolsEl.checked) chars += symbols;

  if (chars === "") {
    alert("Select at least one option!");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordEl.value = password;
}

copyBtn.addEventListener("click", () => {
  if (!passwordEl.value) return;
  passwordEl.select();
  document.execCommand("copy");
  alert("Password copied!");
});
