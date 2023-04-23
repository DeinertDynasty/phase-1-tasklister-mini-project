document.addEventListener('DOMContentLoaded', () => {
  const createTaskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const taskDescriptionInput = document.getElementById('new-task-description');
    const taskDescription = taskDescriptionInput.value;

    if (taskDescription) {
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;
      taskList.appendChild(newTask);

      // Clear the input field after adding the task
      taskDescriptionInput.value = '';
    } else {
      alert('Please enter a task description');
    }
  });
});
