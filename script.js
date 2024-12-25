const inputField = document.querySelector("#inputField");//select input field
const addButton = document.querySelector("#addButton");//select add button
const ul = document.querySelector("#ul");//select Dynamic add ul
const save = []; //save all list items
let editTodo = null ;

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
if(e.target.innerHTML === "Edit"){
    inputField.value = e.target.previousElementSibling.innerHTML;
    inputField.focus();
    addButton.value = 'Edit';
    editTodo = e;
    
}

})