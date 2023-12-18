const todoList = [{
    name: 'wash clothes', 
    dueDate: '2022-12-22' 
    },  {
        name : 'wash dishes',
        dueDate: '2022-12-22'
    }];

renderTodoList();

function renderTodoList() {

let todoListHTML = '';
for (let i = 0; i < todoList.length; i++ ) {

    const toDoObject = todoList[i];
    // const name = toDoObject.name;
    // const dueDate = toDoObject.dueDate;
    const { name, dueDate } = toDoObject;
    const html = `
  
<div> ${name} </div>
<div> ${dueDate} </div> 

<button onclick = "
    todoList.splice(${i}, 1);
    renderTodoList();
" class= "delete-todo-button"> Delete </button> 
    
    `;
    todoListHTML += html;
}
    

    document.querySelector('.js-container').innerHTML = todoListHTML;
}

function addTodo() {
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');

const dueDate = dateInputElement.value;

    todoList.push({
       // name: name, 
       // dueDate: dueDate
        name,
        dueDate
    });


inputElement.value = '';

renderTodoList();
}