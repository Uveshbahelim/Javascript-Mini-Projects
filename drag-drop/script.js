const lists = document.querySelectorAll(".list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

let selected = null;

lists.forEach(item => {
  item.addEventListener("dragstart", e => {
    selected = e.target;
  });
});

[rightBox, leftBox].forEach(box => {
  box.addEventListener("dragover", e => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    if (selected) box.appendChild(selected);
    selected = null;
  });
});
