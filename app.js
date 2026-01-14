const login = document.querySelector("#login")
const loginForm = new FormData(login)

login.addEventListener("submit", (event)=>{
    event.preventDefault()
    let data = {}
    data.pass = loginForm.get("pass")
    let dataJSON = JSON.stringify(data)
    fetch(`http://web4.informatics.ru:82/api/a3c284b621490ba9630746b38a4f89de/${loginForm.get("name")}`,{
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
})