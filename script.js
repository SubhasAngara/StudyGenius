let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
    let task = taskInput.value;
    if (task !== "") {
        let li = document.createElement("li");
        li.innerHTML = task + '<button class="deleteBtn" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}
