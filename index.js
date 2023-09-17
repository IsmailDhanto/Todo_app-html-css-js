// Get references to the input box and list container elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add a task to the list
function AddTask() {
  // Check if the input box is empty
  if (inputBox.value === '') {
    // Show an error message if the input box is empty
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Write something Fool!',
    });
  } else {
    // Create a new list item
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;

    // Insert the new list item at the beginning of the list container
    listContainer.insertBefore(li, listContainer.firstChild);

    // Create a delete button (span element) for the list item
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';

    // Append the delete button to the list item
    li.appendChild(span);
  }

  // Clear the input box value
  inputBox.value = '';

  // Save the updated list data
  saveData();
}

// Event listener for handling clicks on the list container
listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    // Toggle the 'checked' class on the list item
    e.target.classList.toggle('checked');

    // Save the updated list data
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    // Remove the parent list item when the delete button is clicked
    e.target.parentElement.remove();

    // Save the updated list data
    saveData();
  }
}, false);

// Function to save the list data to localStorage
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

// Function to display the saved tasks on page load
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

// Call the showTask function to display saved tasks
showTask();