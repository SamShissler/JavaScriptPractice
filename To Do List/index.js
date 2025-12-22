const addButton = document.getElementById("button");
const list = document.getElementById("list");
const input = document.getElementById("toDoInput");
const clearButton = document.getElementById("clear")

function addToDo(){
    const li = document.createElement("li");
    let inputValue = input.value;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.class = "checkbox";
    const t = document.createTextNode(inputValue);
    li.appendChild(check);
    li.appendChild(t);

    if(inputValue == ""){
        window.alert("Input Invalid\nPlease enter a valid input");
    }else{
        list.appendChild(li);
    }
    console.log(inputValue);
    input.value = "";
}

function clear(){
    while(list.childElementCount>0){
        list.removeChild(list.lastChild);
    }
}

addButton.addEventListener("click", addToDo);
input.addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        addButton.click();
    }
})
clearButton.addEventListener("click", clear)