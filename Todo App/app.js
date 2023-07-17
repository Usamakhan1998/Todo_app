var list = document.getElementById("list");

function addTodo(){
    // todo functiom
    var todo_item = document.getElementById("todo_item");
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class",("text"))
    li.appendChild(liText)
    
    // delet button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delet")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deletItem(this)")
    
    //Edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT") 
    editBtn.setAttribute("class","btn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")
    
       
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value= ""
    
} 

function deletItem(e){
    e.parentNode.remove()

}

function editItem(e){
    var val = prompt("Enter Update Value", e.parentNode.firstChild.nodeValue) 
    e.parentNode.firstChild.nodeValue = val;
 }
 

function deletAll(){
    list.innerHTML = ""
}


