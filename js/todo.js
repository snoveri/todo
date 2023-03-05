const todoform = document.getElementById("todo-form");
const todoInput = todoform.querySelector("input");
const todolist = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoobj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoobj);
  paintTodo(newTodoobj);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", DeletTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todolist.appendChild(li);
}

function DeletTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoform.addEventListener("submit", handleTodoSubmit);

const savedtodos = localStorage.getItem(TODOS_KEY);

if (savedtodos !== null) {
  //null 이 아닐떄
  const parsedTodos = JSON.parse(savedtodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
