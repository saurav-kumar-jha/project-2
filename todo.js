let btn = document.getElementById("btnadd")
let input = document.getElementById("input")
let list = document.getElementById("list")
btn.addEventListener("click",()=>{
    let task = input.value;
    if(task.trim()!==""){
        let listitem = document.createElement("div")
        listitem.className="list"
        listitem.innerHTML=` <input type="checkbox" class="check">
        <p>${task}</p>`
        list.appendChild(listitem);
    }
})