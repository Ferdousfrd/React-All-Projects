const btnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtnEl = document.getElementById("tab-btn")
let myLeads = []

//bringing the values from localstorage, storing them into a local variable and since they are strings, we parse them to make em array
const leadsLocalStorage = JSON.parse( localStorage.getItem("myLeads") )   

if(leadsLocalStorage){                  //checking localstoreage truthy or falsy(null if its empty)
    myLeads = leadsLocalStorage         //assigning localstorage value to myLeads array
    renderList(myLeads)
}

function renderList(leads){
    let listItems = ""
    for(let i=0; i<leads.length;i++){
        //listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i]+ "</li>"
        //lets use tamplate string ` ` . it helps writing js in a easy good way
        listItems += `
                        <li>
                            <a target="_blank" href="${leads[i]}">${leads[i]}</a>
                        </li>
        `
        
    }
    ulEl.innerHTML = listItems
}

tabBtnEl.addEventListener("click", function(){
    //We are trying to use chrome.tabs api inorder to get the tab url. also had to add permission in manifest file
    chrome.tabs.query( {active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderList(myLeads)
    })

})

btnEl.addEventListener( "click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderList(myLeads)

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderList(myLeads)
})


