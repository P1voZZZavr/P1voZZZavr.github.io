"use strict";

const openBtns = document.querySelectorAll(".open")
const sections = document.querySelectorAll(".section")
const sectionHeads = document.querySelectorAll(".section_head")
for (let i = 0; i < openBtns.length; i++){
    openBtns[i].addEventListener("click",(event)=>{
        sections[i].classList.toggle("none")
        sectionHeads[i].classList.toggle("border_rad")
        sectionHeads[i].classList.toggle("border_rad_full")
    }) 
}