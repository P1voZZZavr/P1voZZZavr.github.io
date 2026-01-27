"use strict";
const login = document.querySelector("#login")
const signin = document.querySelector("#signin")
const signup = document.querySelector("#signup")
const loginError = document.querySelector(".login_error")


function menuBtn() {
    let menuBtn = document.querySelector("#menuBtn")
    let name = localStorage.getItem(name)
    if (name != null){
        menuBtn.innerText = name
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


signup.addEventListener("click", (event)=>{
    event.preventDefault()
    let data = {}
    let loginForm = new FormData(login)
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

signin.addEventListener("click", async (event)=>{
    event.preventDefault()
    let loginForm = new FormData(login)
    let name = loginForm.get("name")
    let pass = loginForm.get("pass")
    let get = await fetchServerGet(name)
    if (get.pass == pass){
        localStorage.setItem("name",name)
    }
})
