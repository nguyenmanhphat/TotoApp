let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");


ourForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createItem(ourField.value);
    
});

function createItem(x){
    ourList.insertAdjacentHTML("beforeend", `<li>${x}<button onclick="deleteItem(this)">Delete</button></li>`)
}

function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove();
}

function deleteAll(){
    ourList.innerHTML = "";
    
}