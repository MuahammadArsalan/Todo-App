// const todoInput = document.querySelector('#todo');
// const ol = document.querySelector('ol');
// const arr = [];

// function addTodo() {
//     const todo = todoInput.value;
//     arr.push(todoInput.value);
//     console.log(arr);
//     ol.innerHTML = '';
//     for (let i = 0; i < arr.length; i++) {
//         ol.innerHTML += `<li>
//     ${arr[i]}
//     <button onclick="deleteTodo(${i}) ">delete</button> 
//     <button onclick="editTodo(${i})">edit Todo</button>
//     </li>   `
//     }
//     todoInput.value = ''
// }
// function deleteTodo(index) {
//     console.log('deleteTodo', index);
// }
// function editTodo(index) {
//     console.log('editTodo', index);
// }


// function render() {
//     arr.splice(index, 1);

// }






const todoInput = document.querySelector('#todo');
const ol = document.querySelector('ol');

const arr = [];

function addTodo(){

  arr.push(todoInput.value);
  console.log(arr);
  ol.innerHTML = ''
  for(let i=0;i<arr.length;i++){
ol.innerHTML += `<li>${arr[i]} 
<button onclick="deleteTodo(${i})" class="delete">Delete</button>
<button onclick="editTodo(${i})" class="edit">Edit</button>
</li>`
  }

  todoInput.value = '';
}

function deleteTodo(index){

// console.log('Delete todo and the index number is ===>',index);
// ol.innerHTML =''


}
function editTodo(index){
    // console.log('Edit todo and the index number is ===>',index);
    let update = prompt('Enter updated value');
}




































































































