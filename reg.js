"use strict";
const login = document.querySelector("#login")
const signin = document.querySelector("#signin")
const signup = document.querySelector("#signup")
const loginError = document.querySelector(".login_error")
const loginErrorText = document.querySelector(".login_error_text")
const loginSuccessful = document.querySelector(".login_successful")
const loginSuccessfulText = document.querySelector(".login_successful_text")

menuBtn()

function menuBtn() {
    let menuBtn = document.querySelector("#signinBtn")
    let username = localStorage.getItem("name")
    if (username != null){
        menuBtn.innerText = username[0].toUpperCase() + username.slice(1)
    }
}

async function fetchServerPost(data,name){
    let dataJSON = JSON.stringify(data)
    const response = await fetch(`http://web4.informatics.ru:82/api/a3c284b621490ba9630746b38a4f89de/${name}`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJSON
    })
    .then((response)=>{
        if (response.ok){
            return response.json()
        }
        else{
            console.log("Ошибка ", response.status)
        }
    })
    .then((data)=>{
        return data
    })
    return response
}

async function fetchServerGet(name){
    const response = await fetch(`http://web4.informatics.ru:82/api/a3c284b621490ba9630746b38a4f89de/${name}`)
    .then((response)=>{
        if (response.ok){
            return response.json()
        }
        else{
            console.log("Ошибка ", response.status)
        }
    })
    .then((data)=>{
        return data
    })
    return response
}


signup.addEventListener("click", async (event)=>{
    event.preventDefault()
    let data = {}
    let loginForm = new FormData(login)
    let name = loginForm.get("name").toLowerCase()
    data.pass = loginForm.get("pass")
    let get = await fetchServerGet(name)
    if (data.pass == ""){
        loginErrorText.innerText = "Поле пароля не может быть пустым"
        loginError.style.display = "block";
        setTimeout(()=>{
            location.reload()
        },2000)
        return false
    }
    else if (name.includes("order")){
        loginErrorText.innerText = "Имя не может содержать слово order"
        loginError.style.display = "block";
        setTimeout(()=>{
            location.reload()
        },2000)
        return false        
    }
    else if (get.pass == null){
        await fetchServerPost(data, name)
        loginSuccessful.style.display = "block"
        loginSuccessfulText.innerText = "Успешная регистрация"
    }
    else {
        loginSuccessful.style.display = "none"
        loginErrorText.innerText = "Такой пользователь уже зарегестрирован"
        loginError.style.display = "block";
        setTimeout(()=>{
            location.reload()
        },2000)
    }
})

signin.addEventListener("click", async (event)=>{
    event.preventDefault()
    let loginForm = new FormData(login)
    let name = loginForm.get("name").toLowerCase()
    let pass = loginForm.get("pass")
    let get = await fetchServerGet(name)
    if (get.pass == pass){
        localStorage.setItem("name",name)   
        loginSuccessful.style.display = "block"
        loginSuccessfulText.innerText = "Успешный вход"
        menuBtn()
    }
    else if(get.pass == null){
        loginSuccessful.style.display = "none"
        loginErrorText.innerText = "Такой пользователь еще не зарегестрирован"
        loginError.style.display = "block";
        setTimeout(()=>{
            location.reload()
        },2000)
    }
    else {
        loginSuccessful.style.display = "none"
        loginErrorText.innerText = "Неверный пароль"
        loginError.style.display = "block";
        setTimeout(()=>{
            location.reload()
        },2000)
    }
})
