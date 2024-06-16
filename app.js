document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Document loaded");

    function addTask(textValueNow) {
        if (!textValueNow.trim()) {
            alert("Please enter a task.");
            return;
        }

        console.log("Adding task:", textValueNow);

        // Create the new task container
        const taskNow = document.createElement("div");
        taskNow.className = "the-list";

        // Create the task features container
        const taskFeatures = document.createElement("div");
        taskFeatures.className = "the-list-features";

        // Create the task category
        const taskCategory = document.createElement("div");
        taskCategory.className = "the-list-category";
        const categoryText = document.createElement("p");
        categoryText.textContent = "Nathan_ssk"; // Change this if you want to add dynamic categories
        taskCategory.appendChild(categoryText);

        // Create the content modify container
        const contentModify = document.createElement("div");
        contentModify.className = "content-modify";

        // Create the edit button
        const editButton = document.createElement("button");
        editButton.className = "edit-text-btn";
        editButton.addEventListener("click", () => editTask(taskNow));
        contentModify.appendChild(editButton);

        // Create the done button
        const doneButton = document.createElement("button");
        doneButton.className = "list-done-btn";
        doneButton.addEventListener("click", () => deleteTask(taskNow));
        contentModify.appendChild(doneButton);

        // Append category and modify buttons to task features
        taskFeatures.appendChild(taskCategory);
        taskFeatures.appendChild(contentModify);

        // Create the main content container
        const mainContent = document.createElement("div");
        mainContent.className = "the-list-main-content";
        const mainContentText = document.createElement("p");
        mainContentText.textContent = textValueNow;
        mainContent.appendChild(mainContentText);

        // Append features and main content to the new task
        taskNow.appendChild(taskFeatures);
        taskNow.appendChild(mainContent);

        // Append the new task to the task list
        document.getElementById("taskList").appendChild(taskNow);

        // Clear the input field
        document.getElementById("newTask").value = "";
    }

    function editTask(taskElement) {
        const mainContent = taskElement.querySelector('.the-list-main-content p');
        const currentText = mainContent.textContent;

        // Create an input field with the current text
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentText;

        // Replace the paragraph with the input field
        taskElement.querySelector('.the-list-main-content').innerHTML = '';
        taskElement.querySelector('.the-list-main-content').appendChild(inputField);

        // Focus the input field
        inputField.focus();

        // Save the new text when the user presses Enter
        inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const newText = inputField.value;
                mainContent.textContent = newText;
                taskElement.querySelector('.the-list-main-content').innerHTML = '';
                taskElement.querySelector('.the-list-main-content').appendChild(mainContent);
            }
        });
    }

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    // Add event listener to the add button
    document.querySelector(".add-btn").addEventListener("click", function() {
        const newTaskValue = document.getElementById("newTask").value;
        console.log("Button clicked, input value:", newTaskValue);
        addTask(newTaskValue);
    });
});
