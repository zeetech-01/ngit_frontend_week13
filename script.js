function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskValue}</span>
    <button class="delete-btn">Delete</button>
  `;

  const deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = "";
}