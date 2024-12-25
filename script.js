//  //start after dom content loaded
//     const inputField = document.querySelector("#inputField");//select input field
//     const addButton = document.querySelector("#addButton");//select add button
//     const dinamicAdd = document.querySelector("#dinamicAdd");//select Dynamic add ul

// //to do item add function
// function addTodo(){
//     const toDoText = inputField.value.trim();
//     if(toDoText === ""){
//         alert("input field is emty. Please enter a task")
//     }
//     else{
//         todoList.push(toDoText)
//     }

// //New Todo item add 
// const todoList = document.createElement("li");
// todoList.className = 'flex justify-between items-center py-2 border-b';//list item create and customize

// const todoSpan = document.createElement("span"); //Span tag create
// todoSpan.textContent = toDoText; //include text at span from input box;

// //create edit button
// const editButton = document.createElement("button");
// editButton.textContent = "Edit";
// editButton.className = 'text-blue-500 hover:underline';
// editButton.addEventListener("click", ()=>{
//     editTodo(todoSpan, editButton);
// });
// //create delete button
// const deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";
// deleteButton.className = 'text-red-500 hover:underline';

// deleteButton.addEventListener("click", ()=>{
//     deleteTodo(todoList);
// });
// //add in list item
// todoList.appendChild(todoSpan);
// todoList.appendChild(editButton);
// todoList.appendChild(deleteButton);
// //add in ul
// dinamicAdd.appendChild(todoList);

// //cleare input field
// inputField.value = '';
// }

// //Edit todo function
// function editTodoo(todoSpan, editButton){
//     if (editButton.textContent === 'Edit'){

//         //enable Edit mood
//         const editInput = document.createElement('input'); //create input tag
//         editInput.type = 'text';
//         editInput.value = todoSpan.textContent;
//         todoSpan.replaceWith(editInput);//replace span
//         editButton.textContent = 'save'; //change button text.
//     }
//     //save mood enable
//     else{
//         const newSpan = document.createElement("span");
//         newSpan.textContent = todoSpan.value;
//         editButton.textContent = 'edit';
//         todoSpan.replaceWith(newSpan);

//     }
// };

// //todo item delete function start>>>>>>>>>>>
// function deleteTodo(todoList){
// todoList.remove(); //Remove  list items
// }

// // >>>>>>>>>Add Button Event Handeler>>>>>>>>>>..
// addButton.addEventListener('click', ()=>{
//     addTodo();
// });
// document.querySelector("#todo-form").addEventListener('click', (e)=>{
// e.preventDefault();
// addTodo();
// });

const inputField = document.querySelector("#inputField");//select input field
const addButton = document.querySelector("#addButton");//select add button
const ul = document.querySelector("#ul");//select Dynamic add ul
const save = []; //save all list items

addButton.addEventListener('click', ()=>{
//defalt behaver remove

let textInput = inputField.value.trim();
if(textInput.length <= 0){
    alert("Please enter a value");
    return;
}
else{

    //p and li tag create>>>>>>>>>
    let list = document.createElement('li');
    let p = document.createElement('p');
    list.className= 'bg-white text-lg rounded-md w-[95%]  mx-auto my-3 py-2 px-4 flex justify-between gap-2';
    p.innerHTML = textInput;
    ul.appendChild(list)
    list.appendChild(p);

    inputField.value = '';
 
    //creating edit button>>>>>>>.
    const editBtn = document.createElement("button");
    editBtn.innerText = 'Edit';
    editBtn.className = 'bg-yellow-400 px-2 py-1 rounded-md font-semibold text-white'
    list.appendChild(editBtn);

    //creating remove button>>>>>.
    const removeBtn = document.createElement("button");
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'bg-red-600 px-2 py-1 rounded-md font-semibold text-white'
    list.appendChild(removeBtn);

}
});

//Function To update (Edit and Delete) button
ul.addEventListener('click', (e)=>{
if(e.target.innerHTML === 'Remove'){
    ul.removeChild(e.target.parentElement);
}
})