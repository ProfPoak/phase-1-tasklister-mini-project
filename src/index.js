document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    buildToDo(taskDescription.value)
    taskDescription.value = ""
  })

  const taskDescription = document.getElementById("new-task-description")

  function buildToDo(taskDescription) {
    const newLi = document.createElement("li")
    newLi.textContent = taskDescription
    tasks.append(newLi)
  }
});


