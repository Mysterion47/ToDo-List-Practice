let addMessage = document.querySelector('.toDoElement'),
	addButton = document.querySelector('.btnAd'),
	todo = document.querySelector('.listCases');

let todoList = [];

if(localStorage.getItem('todo')){
	todoList = JSON.parse(localStorage.getItem('todo'));
	displayMessages();
}

addButton.addEventListener('click', function(){

		let newTodo = {
			todo: addMessage.value,
			checked: false
		};

		todoList.push(newTodo);
		displayMessages();
		localStorage.setItem('todo', JSON.stringify(todoList));
	});
  

(function Key() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
  		let newTodoKey = {
			todo: addMessage.value,
			checked: false
		};

		todoList.push(newTodo);
		displayMessages();
		localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
})();


function displayMessages(){
	let displayMessage = '';
	todoList.forEach(function(item, i) {
		displayMessage += `
		<li oncontextmenu="this.remove()">
		<input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
		<label contentEditable = "true">${item.todo}</label>
		</li>
		`;
		todo.innerHTML = displayMessage;
	});
}


const checkLength = function(evt) {
  if (DealField.value.length > 0) {
  	button.removeAttribute('disabled')
  }
}

const DealField = document.querySelector('input[name="deal"]');
const button = document.querySelector('button');
DealField.addEventListener('keyup', checkLength);


todo.addEventListener('change', function(event){
	let idInput = event.target.getAttribute('id');
	let forLabel = todo.querySelector('[for='+ idInput +']');
	let valueLabel = forLabel.innerHTML;


todoList.forEach(function(item){
		if (item.todo === valueLabel){
			item.checked = !item.checked;
			localStorage.setItem('todo', JSON.stringify(todoList));
		}
	});
});

todo.oncontextmenu = function (){return false};
