const taskInput = document.getElementById("task-input");
const addTaskButton = document.querySelector("button");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
    const task = taskInput.value.trim(); // Get the task input
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = document.createElement("li"); // Create a new <li>
    newTask.textContent = task;

    const deleteButton = document.createElement("button"); // Create a delete button
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    newTask.appendChild(deleteButton); // Add the button to the task
    taskList.appendChild(newTask); // Add the task to the list
    taskInput.value = ""; // Clear the input
});

// Event delegation for delete functionality
taskList.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("delete-btn")) {
        const taskToRemove = event.target.parentElement; // The <li> to delete
        taskToRemove.remove(); // Remove the task
        console.log("Task removed!");
    }
});
