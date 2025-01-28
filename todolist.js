function addTask() {
  
  const taskText = document.createElement('span');
  taskText.textContent = document.getElementById('inputTask').value;

  if (taskText.textContent.trim() === "") {
    alert("Please enter the text first");
    return; 
  }
  const newTask = document.createElement('li');
  const taskList = document.getElementById('taskList');
  taskList.appendChild(newTask);

  newTask.appendChild(taskText);

  document.getElementById('inputTask').value = "";

  deleteTask(newTask);
  updateTask(newTask, taskText); 
}

function deleteTask(newTask) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  newTask.appendChild(deleteBtn);

  deleteBtn.onclick = function () {
    newTask.remove();
  };
}

function updateTask(newTask, taskText) {
  const updateBtn = document.createElement('button');
  updateBtn.id = "todoSpan"
  updateBtn.textContent = "Update";
  newTask.appendChild(updateBtn);

  updateBtn.onclick = function () {
    const newInput = prompt("Update your task:", taskText.textContent);
    if (newInput) taskText.textContent = newInput; 
  };
}
