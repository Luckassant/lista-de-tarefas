function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;
    newTask.addEventListener("click", toggleTask);
    taskList.appendChild(newTask);

    taskInput.value = "";
}

function toggleTask() {
    this.classList.toggle("completed");
}
