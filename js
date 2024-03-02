const  inputbox = document.getElementById("input-box");
const listcont = document.getElementById("list-container");

function addTask()
{
    if(inputbox.value === '')
    {
        alert("You must write something")
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
inputbox.addEventListener("keydown", function(event) {
    if (event.key==="Enter") {
        addTask();
    }
});

listcont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcont.innerHTML);
}
function showTask(){
    listcont.innerHTML = localStorage.getItem("data");
}
showTask();
