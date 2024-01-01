var taskCount = 0; 

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dueDate = document.getElementById("dueDate");
    var priority = document.getElementById("priority");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var currentDate = new Date();
    var selectedDate = new Date(dueDate.value);
    var timeDifference = selectedDate.getTime() - currentDate.getTime();
    var daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

    taskCount++; 

    var li = document.createElement("li");
    li.innerHTML = `
        <div class="task-details">
            <span class="task-serial">${taskCount}.</span>
            <span class="task-name"><strong>Task:</strong> ${taskInput.value}</span>
            <span class="task-info"><strong>Due in:</strong> ${daysRemaining} days</span>
            <span class="task-info"><strong>Priority:</strong> ${getPriorityText(priority.value)}</span>
        </div>
        <div class="task-buttons">
            <button class="remove-button" onclick="removeTask(this)">Remove</button>
        </div>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
    dueDate.value = "";
    priority.value = "low";
}

function getPriorityText(priorityValue) {
    switch (priorityValue) {
        case 'low':
            return 'Low Priority';
        case 'medium':
            return 'Medium Priority';
        case 'high':
            return 'Highest Priority';
        default:
            return '';
    }
}

function removeTask(button) {
    var li = button.parentElement.parentElement;
    li.remove();
}
