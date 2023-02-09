const toggle = document.querySelector(".toggle")
const header = document.querySelector(".header")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> toggleleNavebar())


