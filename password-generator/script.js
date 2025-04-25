const passwordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // fixed missing 't'
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]<>/-";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += getRandomChar(lowerCase);
  password += getRandomChar(upperCase);
  password += getRandomChar(numbers);
  password += getRandomChar(symbols);

  while (password.length < length) {
    password += getRandomChar(allChars);
  }

  passwordBox.value = shuffle(password);
}

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

// Fisher-Yates shuffle for better randomness
function shuffle(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value)
    .then(() => alert("Password copied!"))
    .catch(() => alert("Failed to copy password."));
}
