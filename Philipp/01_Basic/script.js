// ex1

const nameInput = document.querySelectorAll(".form-control")
const result = document.getElementById("result")

const validateInput = (e) => {
    if(e.target.value.length < 5) {
        e.target.style.color = "red"
    } else {
        e.target.style.color = "green"
    }
}

const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const addData = document.querySelector(".add-data")

var itemList = []

const printItems = () => {
    result.innerHTML = "";
    itemList.forEach((item) => {
        result.innerHTML += `<li class="list-group-item">${item}</li>`;
    });
};

const addItems = () => {
    nameInput.forEach(elem => {
        console.log("added: "+elem.value)
        if(elem.value.length != 0) {
            itemList.push(elem.value)
        }
        elem.value = "";
    });
    console.log("items: "+itemList)
    console.log(itemList.length)
    if(itemList.length != 0) {
        printItems()
    }
};

addData.addEventListener("click", addItems)

// ex2

nameInput.forEach(element => {
    element.addEventListener("input", validateInput);
});

const jobInput = document.querySelector("#job-select")

const validateJob = (e) => {
    console.log("e.value = "+e.target.value)
    if(e.target.value == 1) {
        document.body.style.backgroundColor = "purple"
    } else if(e.target.value == 2) {
        document.body.style.backgroundColor = "yellow"
    } else if(e.target.value == 3) {
        document.body.style.backgroundColor = "green"
    } 
}

jobInput.addEventListener("input", validateJob);