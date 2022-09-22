let BtnAdd = document.getElementById("btnAdd");
let todoInput=document.getElementById("input");
let DivContainer = document.getElementById("detail");
BtnAdd.addEventListener("click", AddNew);
DivContainer.addEventListener("click",checkContainerdel);
DivContainer.addEventListener("click",checkContainer)
let c=0;
function AddNew() {
    //new div
    const newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    //new p
    const newName=document.createElement("p")
    newName.innerText=todoInput.value;
    newName.classList.add("p-name")
    newDiv.appendChild(newName);
    //div container input
    const secondDiv=document.createElement("div");
    secondDiv.classList.add("second");
    newDiv.appendChild(secondDiv);
    //new button del
    const completeButton=document.createElement("button");
    completeButton.innerHTML="DELETE"
    completeButton.classList.add("btn-del");
    secondDiv.appendChild(completeButton);
    //new edit
    const editNameButton=document.createElement("button");
    editNameButton.innerHTML="EDIT"
    editNameButton.classList.add("btn-edit");
    secondDiv.appendChild(editNameButton);
    DivContainer.appendChild(newDiv);
    todoInput.value="";
    c++;
   displayProductOrder(c);
}
function displayProductOrder(num) {
    document.getElementById("hiu").innerHTML = num;
}
function checkContainerdel(del){
    const item=del.target;
    if (item.classList[0]==="btn-del"){
        const doTo=item.parentElement.parentElement;
        doTo.remove();
    }
    c--;
    displayProductOrder(c);

}
function checkContainer(edit){
    const item=edit.target;
    if (item.classList[0]==="btn-edit"){
        const edit=item.parentElement.previousElementSibling;
        edit.innerHTML=prompt("nhap chu m muon doui")
    }
}