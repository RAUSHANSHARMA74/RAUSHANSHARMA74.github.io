const toggle = document.querySelector(".toggle")
const header = document.querySelector(".header")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> toggleleNavebar())


function downloadresume(){
    window.open("https://export-download.canva.com/mS0t8/DAFY-jmS0t8/106/0-44370470582.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230330T221625Z&X-Amz-Expires=61072&X-Amz-Signature=f3b72179d0659bdeb37aac708308a73bbe4d7701e43cbe5940fe1ca1a206573c&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27RAUSHAN%2520SHARMA.pdf&response-expires=Fri%2C%2031%20Mar%202023%2015%3A14%3A17%20GMT")
}
