let secretNumber = Math.floor(Math.random()*100) + 1;
let attempts = 0;

function chekGuess() {
    const userGuess =  parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message")
    attempts++;
    if (userGuess === secretNumber) {
        message.innerText = `Correct! You guessed it in ${attempts} tries.`;
    }else if(userGuess < secretNumber) {
        message.innerText = `To low! Try again.`;
    }else {
        message.innerText = "Too  high! Try again.";
    }
}
function resetGame() {
    secretNumber = Math.floor(Math.random()* 100) +1;
    attempts = 0;
     document.getElementById("guessInput").value = "";
     document.getElementById("message").innerText="";
}

document.getElementById("guessInput").addEventListener("keyup", function(event) {
    if(event.key==="Enter"){
    chekGuess()
    }
})