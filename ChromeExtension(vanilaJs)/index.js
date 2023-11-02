const btnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []

btnEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderList()
})

function renderList(){
    let listItems = ""
    for(let i=0; i<myLeads.length;i++){
        listItems += "<li>" + myLeads[i]+ "</li>"
    }
    ulEl.innerHTML = listItems
}
