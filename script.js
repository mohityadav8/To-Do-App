// Step 1: Select the necessary elements from the HTML
const inputElement = document.querySelector("#todo-input"); // Input field where user types
const addButton = document.querySelector("button"); // "Add" button
const taskList = document.querySelector("ul"); // The <ul> where tasks will be added
const formElement = document.querySelector("form"); // The form element

// Debugging: Check if elements are selected correctly
console.log(inputElement, addButton, taskList, formElement);

// Step 2: Listen for the form submission event
formElement.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    // Step 3: Get the input value
    const taskText = inputElement.value.trim(); // Remove extra spaces

    // Step 4: Validate if the input is empty
    if (taskText === "") {
        alert("Please enter a task!"); // Show alert if input is empty
        return; // Stop execution
    }

    // Debugging: Confirm the captured task
    console.log("Task to be added:", taskText);

    // Step 5: Create a new <li> element
    const newTask = document.createElement("li");
    newTask.textContent = taskText; // Set the text content of <li>

    // Step 6: Create a delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌"; // Set delete button text
    deleteButton.style.marginLeft = "10px"; // Add space between text and button
    deleteButton.style.cursor = "pointer"; // Change cursor to pointer on hover

    // Step 7: Append the delete button inside the new <li>
    newTask.appendChild(deleteButton);

    // Step 8: Add the new task to the <ul>
    taskList.appendChild(newTask);

    // Step 9: Clear the input field after adding the task
    inputElement.value = "";

    // Step 10: Add event listener to delete button
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(newTask); // Remove task when delete button is clicked
    });
});
