const toggle = document.querySelector(".toggle")
const header = document.querySelector(".header")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> toggleleNavebar())


function downloadresume(){
    window.open("https://export-download.canva.com/mS0t8/DAFY-jmS0t8/73/0-47049895533.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230214%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230214T162552Z&X-Amz-Expires=85705&X-Amz-Signature=665a1b2024194cdc6e48a53732b2ed3c6fe672ee93027d4750b0b4620fbc0891&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27RAUSHAN%2520SHARMA.pdf&response-expires=Wed%2C%2015%20Feb%202023%2016%3A14%3A17%20GMT")
}
