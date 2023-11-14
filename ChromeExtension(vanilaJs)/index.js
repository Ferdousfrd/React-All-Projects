const btnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let myLeads = []

//bringing the values from localstorage, storing them into a local variable and since they are strings, we parse them to make em array
const leadsLocalStorage = JSON.parse( localStorage.getItem("myLeads") )   
if(leadsLocalStorage){                  //checking localstoreage truthy or falsy(null if its empty)
    myLeads = leadsLocalStorage         //assigning localstorage value to myLeads array
    renderList()
}


btnEl.addEventListener( "click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderList()

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
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
