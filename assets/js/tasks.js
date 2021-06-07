const tasks = document.querySelector('#task');
const taskBtn = document.querySelector('.task-button');
const createdTasks = document.querySelector('.created-tasks');


function createLi() {
  const li = document.createElement('li');
  return li;
}

function createTask(textInput) {
  const li = createLi();
  li.innerText = textInput;
  createdTasks.appendChild(li);
  li.classList.add('li-theme');
  cleanInput();
  criaBotaoApagar(li);
  saveTasks();
}

function cleanInput() {
  tasks.value = '';
  tasks.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const btnDelete = document.createElement('button');
  btnDelete.innerText = 'Apagar';
  // btnDelete.classList.add('apagar');
  btnDelete.setAttribute('class', 'apagar');
  btnDelete.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(btnDelete);
}

tasks.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!tasks.value) return;
    createTask(tasks.value);
  }
});

taskBtn.addEventListener('click', (e) => {
  createTask(tasks.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() 
{
  const createdTaskLi = createdTasks.querySelectorAll('li');
  const listOfTasks = [];

  for (let task of createdTaskLi) {
    let taskText = task.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    listOfTasks.push(taskText);
  }
  const tasksJSON = JSON.stringify(listOfTasks);
  localStorage.setItem('tasks', tasksJSON);
}

function addTaskSaved() {
  const tasks = localStorage.getItem('tasks');
  const listOfTasksSaved = JSON.parse(tasks);
  for(let task of listOfTasksSaved) {
    createTask(task);
  }
}
addTaskSaved();