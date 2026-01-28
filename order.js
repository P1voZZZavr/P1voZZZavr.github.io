const buyBtns = document.querySelectorAll(".buy_btn")
const tileTexts = document.querySelectorAll(".CName")
const consoleName = document.querySelector("span")
const delivery = document.querySelector(".delivery")
const cross = document.querySelector(".form_cross")
const formSubmit = document.querySelector(".form_submit")
const deliveryForm = document.querySelector(".delivery_form")
const message = document.querySelector("h1")

for(let i = 0; i < buyBtns.length; i++){
    buyBtns[i].addEventListener("click",()=>{
        if (localStorage.getItem("name") != null){
            consoleName.textContent = tileTexts[i].textContent
            delivery.classList.remove("none")            
        }
        else {
            message.classList.add("red")            
            message.textContent = "Чтобы сделать заказ, нужно войти в аккаунт"
            message.classList.remove("none")
            setTimeout(()=>{
                location.reload()
            },2000)
        }
    })
}

cross.addEventListener("click",()=>{
    delivery.classList.add("none")   
})

formSubmit.addEventListener("click", async (event)=>{
    event.preventDefault()
    let fdata = new FormData(deliveryForm)
    let data = {}
    data.address = fdata.get("address")
    data.name = fdata.get("surname")
    data.email = fdata.get("mail")
    let name = localStorage.getItem("name").toLowerCase()
    fetchServerPost(data,(name + "_order"))
    message.classList.add("green")            
    message.textContent = "Заказ успешно создан, ожидайте обратной связи по email"
    message.classList.remove("none")
    setTimeout(()=>{
        location.reload()
    },5000)
})