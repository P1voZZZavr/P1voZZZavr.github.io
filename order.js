const buyBtns = document.querySelectorAll(".buy_btn")
const tileTexts = document.querySelectorAll(".CName")
const consoleName = document.querySelector("span")
const delivery = document.querySelector(".delivery")
const cross = document.querySelector(".form_cross")

for(let i = 0; i < buyBtns.length; i++){
    buyBtns[i].addEventListener("click",()=>{
        consoleName.textContent = tileTexts[i].textContent
        delivery.classList.remove("none")
    })
}

cross.addEventListener("click",()=>{
    delivery.classList.add("none")   
})