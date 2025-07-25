// your code goes here
function addTask() {
  const list = document.getElementById("todo-list");
  const newItem = document.createElement("li");
  newItem.innerHTML = `<input type="checkbox" /> <input type="text" placeholder="Task..." />`;
  list.appendChild(newItem);
}
