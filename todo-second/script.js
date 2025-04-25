document.querySelector('#push').onclick = function () {
  const inputField = document.querySelector('#newTask input');
  const taskValue = inputField.value.trim();

  if (!taskValue) {
      alert("Please enter a value");
      return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.innerHTML = `
      <span class="taskname">${taskValue}</span>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
  `;

  // Mark task as complete
  taskDiv.querySelector('.taskname').onclick = () => {
      taskDiv.querySelector('.taskname').classList.toggle('completed');
  };

  // Delete task
  taskDiv.querySelector('.delete').onclick = () => {
      taskDiv.remove();
  };

  // Edit task
  taskDiv.querySelector('.edit').onclick = () => {
      const taskNameEl = taskDiv.querySelector('.taskname');
      const currentText = taskNameEl.textContent;

      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.value = currentText;

      taskNameEl.innerHTML = '';
      taskNameEl.appendChild(editInput);
      editInput.focus();

      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      saveButton.classList.add('save');
      taskNameEl.appendChild(saveButton);

      saveButton.onclick = () => {
          const newText = editInput.value.trim();
          if (newText) {
              taskNameEl.textContent = newText;
          } else {
              taskNameEl.textContent = currentText;
          }
      };
  };

  document.querySelector('#tasks').appendChild(taskDiv);
  inputField.value = '';
};
