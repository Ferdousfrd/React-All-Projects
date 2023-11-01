const btnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLead = []


btnEl.addEventListener("click", function(){
    myLead.push(inputEl.value)
    for(let i = 0; i<myLead.length; i++){
        ulEl.innerHTML += "<li>" + myLead[i]+ "</li>"
    }
})
