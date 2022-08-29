const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector(".count");
const button = document.querySelector(".form-text-input");
const divRemove = document.querySelector(".form-div");

let num = 0;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodoText = todoInput.value;
  // console.log(newTodoText);
  const newLi = document.createElement("li");
  // console.log(newLi);
  num++;
  const newLiInnerHtml = `
  <div>
    <input type="checkbox" class="checkbox">
  </div>
  <label ><span class="text">${newTodoText}</span></label>
  <div class="todo-btn">
    <button class="remove">Remove</button>
  </div>`;

  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  // console.log(todoList);
  todoInput.value = "";
  // console.log(newLiInnerHtml);
});

todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    // number1 = --num;
    // console.log(number1);
    const targetLi = e.target.parentNode.parentNode;
    // console.log(targetLi);
    targetLi.remove();
    todoCount.textContent = +todoCount.textContent - 1;
    // console.log(todoCount.textContent);
  }
});

todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("checkbox")) {
    const targetLi = e.target.parentNode.parentNode;
    // console.log(targetLi);
    targetLi.style.backgroundColor = "green";
  }
});

divRemove.addEventListener("click", (e) => {
  if (num > 0) {
    todoList.remove();
    todoCount.textContent = 0;
  }
});

button.addEventListener("click", function () {
  todoCount.textContent = +todoCount.textContent + 1;
});
