const toggle = document.querySelector(".toggle")
const header = document.querySelector(".header")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> toggleleNavebar())


let navMenu = document.querySelectorAll("#nav-menu>a")
for(let nav of navMenu){
    nav.addEventListener("click", ()=>{
        header.classList.remove("active")
    })
}


let section = document.querySelectorAll("section")
for(let sec of section){
    sec.addEventListener("click", ()=>{
        header.classList.remove("active")
    })
}
