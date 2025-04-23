const passwordBOX = document.getElementById("Password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrsuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/--";

const allChars = upperCase + lowerCase + number  + symbol;

function createPasswored(){
    password = "";
    password += lowerCase[Math.floor(Math.random() *  lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += number[Math.floor(Math.random() *  number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBOX.value = password;
}

function copyPasswored(){
    passwordBOX.select()
    document.execCommand("copy")
}
