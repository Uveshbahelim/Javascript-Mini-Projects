document.querySelector('#push').onclick = function () {
    
    const inputFeild = document.querySelector('#newTask input');
    const taskValue = inputFeild.value.trim();

    if(!taskValue)return("please Enter a Value");

    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')
    taskDiv.innerHTML  = `
    <spand class =taskname>${taskValue}</spand >
    <button class="edit">✏️</button>
    <button class=delete>❌</button>
    `;

    taskDiv.querySelector('.taskname').onclick = () => taskDiv.querySelector('.taskname').classList.toggle('.completed');
    taskDiv.querySelector('.delete').onclick = () => taskDiv.remove();

    taskDiv.querySelector('.edit').onclick = () => {
        // Get the Current task for editing
        const currentText = taskDiv.querySelector('.taskname').textContent;
        // Create an input feild for editing
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;

        // Replace taskname text with input field for editing
        taskDiv.querySelector('.taskname').innerHTML ='';
        taskDiv.querySelector('.taskname').appendChild(editInput)

         // Focus the input field for immediate editing
         editInput.focus();

          // Add a Save button for saving the edited text
          const saveButton = document.createElement('button')
          saveButton.textContent = 'save'
          saveButton.classList.add = ('save')
          taskDiv.querySelector('.taskname').appendChild(saveButton)

          // Save edited task when Save button is clicked
          saveButton.onclick = () => {
            const newText = editInput.value.trim();
            if (newText) {
              taskDiv.querySelector('.taskname').textContent = newText;
            };
            saveButton.remove();
            editInput.remove();
          }
    }

    document.querySelector('#tasks').appendChild(taskDiv).inputField.value = '';

}