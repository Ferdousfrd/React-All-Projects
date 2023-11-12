const btnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []


let leadsLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsLocalStorage)



btnEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderList()

})

function renderList(){
    let listItems = ""
    for(let i=0; i<myLeads.length;i++){
        //listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i]+ "</li>"
        //lets use tamplate string ` ` . it helps writing js in a easy good way
        listItems += `
                        <li>
                            <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
                        </li>
        `
        
    }
    ulEl.innerHTML = listItems
}
