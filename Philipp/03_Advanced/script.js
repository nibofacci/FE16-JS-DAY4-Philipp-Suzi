const circle = document.querySelector(".circle");
const message = document.querySelector(".message")

/*
const onMouseEnter = () => {
    message.innerText = "You are inside the circle"
}

const onMouseLeave = () => {
    message.innerText = "You are outside the circle"
}
*/
const onMouseEvent = (e) => {
    if(e.type == "mouseenter") {
        message.innerText = "You are inside the circle"
    }
    else if (e.type == "mouseleave"){
        message.innerText = "You are outside the circle"
    }
}

const onClickEvent = (e) => {
    if(e.type == "click") {
        document.body.style.backgroundColor = "gray"
    }
    else if (e.type == "dblclick"){
        document.body.style.backgroundColor = "blue"
    }
}


circle.addEventListener("mouseenter", onMouseEvent)
circle.addEventListener("mouseleave", onMouseEvent)
circle.addEventListener("click", onClickEvent)
circle.addEventListener("dblclick", onClickEvent)

//circle.addEventListener("mouseenter", onMouseEnter)
//circle.addEventListener("mouseleave", onMouseLeave)