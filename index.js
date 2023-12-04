const button=document.querySelector("#btn")
const box=document.querySelector(".circle")
button.addEventListener("click",()=>{
    box.classList.toggle("black-js")
    box.classList.toggle("white-js")
})