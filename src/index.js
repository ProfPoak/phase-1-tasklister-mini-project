document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
  })

  const taskDescription = document.getElementById("new-task-description")

  function buildToDo(taskDescription) {
    const newLi = document.createElement("li")
    newLi.textContent = taskDescription
    task.append(newLi)
  }

  buildToDo(taskDescription)

});
