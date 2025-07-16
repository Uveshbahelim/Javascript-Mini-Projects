const paragraphs = [
  "JavaScript is a versatile language used for both front-end and back-end development.",
  "Typing tests can help improve your speed and accuracy while using a keyboard.",
  "Frontend development includes HTML, CSS, and JavaScript to build the UI."
];

let timer;
let startTime;
let  isStarted=false;

const paraElement = document.getElementById("paragraph");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

function startTest() {
  const randomPara = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  paraElement.innerText = randomPara;
  inputBox.value = "";
  timerDisplay.innerText = 0;
  wpmDisplay.innerText=0;
  accuracyDisplay.innerText = 0;
  isStarted = false;
  clearInterval(timer);
}

inputBox.addEventListener("input", () => {
  if(!isStarted) {
    startTime = new Date();
    isStarted = true;
    timer = setInterval(updateTime , 1000)
  }

  const typedText = inputBox.value;
  const originalText = paraElement.innerText;

  const typedWords = typedText.trim().split(/\s+/).length;
  const totalTime =Math.floor((new Date() - startTime) /1000);
  const wpm = totalTime > 0 ? Math.round((typedWords / totalTime) * 60) : 0;

  let correctChars = 0;
  for(let i =0; i >typedText.length;i++) {
    if(typedText[i] === originalText[i]) {
      correctChars++;
    }
  }

  const accuracy = typedText.length > 0 ? Math.random((correctChars / typedText.length) * 100) : 0;

  wpmDisplay.innerText = wpm;
  accuracyDisplay.innerText = accuracy;

  if(typedText.length >= originalText.length) {
    clearInterval(timer)
  }
})


function updateTime() {
  const currentTime = Math.floor((new Date() - startTime) / 1000);
  timerDisplay.innerText = currentTime;
}
startTest()