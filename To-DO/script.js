const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
        <div class="task-content">
        <input type="checkbox" />
        <span class="task-text">${task}</span>
        </div>
        
        <div >
            <span class="edit-btn">Edit</span>
            <span class="delete-btn">Delete</span>
        </div>
        `;

    listContainer.appendChild(li);
    inputBox.value = "";

    const checkbox = li.querySelector('input');
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener('click', function () {
        li.classList.toggle("completed", checkbox.checked);
        //add the function bellow
        updateCounters();
    })

    editBtn.addEventListener('click', function () {
        const update = prompt("Edit Task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            //add the code below
            checkbox.checked = false;
            updateCounters();
        }
    });

    //delete button
    deleteBtn.addEventListener('click', function () {
        if (confirm("Are You sure You want to delete this task?")) {
            li.remove();
            updateCounters();
        }
        li.classList.remove("completed");
    })

}

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
    const completedTask = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTask;
    uncompletedCounter.textContent = uncompletedTasks;
}