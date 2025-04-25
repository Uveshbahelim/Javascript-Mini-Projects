const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.querySelector("button");

// Add task on button click
btn.addEventListener('click', addTask);

// Add task on Enter key
inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const span = document.createElement('span');
    span.innerHTML = '&times;';
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = '';
    saveData();
}

// Mark as done or delete
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

// Save to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show saved tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
