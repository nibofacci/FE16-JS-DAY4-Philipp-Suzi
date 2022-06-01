const nameInput = document.querySelectorAll(".form-control")

const validateInput = (e) => {
    if(e.target.value.length < 5) {
        e.target.style.color = "red"
    } else {
        e.target.style.color = "green"
    }
}

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