const hex = "0123456789ABCDEF";
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const hexColor = "#" + Array.from({ length: 6 }, () => hex[Math.floor(Math.random() * 16)]).join('');
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
