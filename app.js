'use strict';
const login = document.querySelector("#login")
const signin = document.querySelector("#signin")
const signup = document.querySelector("#signup")
const loginError = document.querySelector(".login_error")
const loginForm = new FormData(login)

function menuBtn() {
    let menuBtn = document.querySelector("#menuBtn")
    let name = localStorage.getItem(name)
    if (name != null){
        menuBtn.innerText = name
    }
}

function fetchServerPost(data,name){
    let dataJSON = JSON.stringify(data)
    fetch(`http://web4.informatics.ru:82/api/a3c284b621490ba9630746b38a4f89de/${name}`,{
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
        console.log(data)
    })    
}

async function fetchServerGet(name){
    fetch(`http://web4.informatics.ru:82/api/a3c284b621490ba9630746b38a4f89de/${name}`)
    .then((response)=>{
        if (response.ok){
            return response.json()
        }
        else{
            console.log("Ошибка ", response.status)
        }
    })
}


signup.addEventListener("click", (event)=>{
    event.preventDefault()
    let data = {}
    let name = loginForm.get("name")
    data.pass = loginForm.get("pass")
    let get = fetchServerGet(name)
    if (get.pass != null){
        fetchServerPost(data, name)
    }
    else {
        loginError.style.display = "block";
    }
})

signin.addEventListener("click", (event)=>{
    event.preventDefault()
    let name = loginForm.get("name")
    let pass = loginForm.get("pass")
    let get = fetchServerGet(name)
    
    if (get.pass == pass){
        localStorage.setItem("name",name)
    }
})