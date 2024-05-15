let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navLlist = document.querySelector(".nav-list");


burger.addEventListener('click',()=>{
    rightNav.classList.toggle("v-class");
    navLlist.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");

});