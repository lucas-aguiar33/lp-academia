const btn_menu = document.querySelector("#btn-menu");
const btn_close = document.querySelector("#btn-close");
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector(".main");
const header = document.querySelector(".header");


btn_menu.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
    main.style.opacity = '0.3';
    header.style.opacity = '0.3';
    document.body.style.overflow = 'hidden';
})

btn_close.addEventListener('click', ()=> {
    sidebar.classList.remove("active");
    main.style.opacity = '1';
    header.style.opacity = '1';
    document.body.style.overflow = 'auto';


})

// script das animações
AOS.init();