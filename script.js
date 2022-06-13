const newsLetter = document.getElementById("newsletter")
const cancel = document.getElementById("cancel")
const subscribe = document.getElementById("subscribe")
const name = document.getElementById("full-name")
const email = document.getElementById("email")
const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")
const subscribeBtn = document.getElementById("subscribe-btn")

const antiSubmit = () => {
    return false
}
const checkForm = () => {
    if (name.value !== NaN || name.value === "") {
        error1.innerText = "Please fill this field correctly."
        antiSubmit()
    } else{
        error1.innerText = ""
        return true
    }
    if (email.value === "" ) {
        error2.innerText = "Please fill this field correctly."
        antiSubmit()
    } else{
        error1.innerText = ""
        return true
    }
    if (email.value.includes("@")) {
        return true
    } else {
        error2.innerText = "Please fill this field correctly"
        antiSubmit()
    }
}

subscribe.addEventListener("click", function(){
    newsLetter.classList.add("show")
})

cancel.addEventListener("click", function(){
    newsLetter.classList.remove("show")
})

subscribeBtn.addEventListener("click", checkForm)