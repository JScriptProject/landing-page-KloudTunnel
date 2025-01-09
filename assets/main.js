"use strict";

// grab element

const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong | Make sure the ${selector} is correct`);
}

const scrollNavbar = () =>{
    const navElement = selectElement(".navbar");
    if(this.scrollY >= 15){
        navElement.classList.add("activated");
    }
    else{
        navElement.classList.remove("activated");
    }
}

window.addEventListener("scroll", scrollNavbar);

const menuToggleIcon =selectElement("#menu-toggle-icon");

const toggleMenu = () =>{
    const mobileMenu = selectElement("#menu")
    mobileMenu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
}

menuToggleIcon.addEventListener("click", toggleMenu);

// swiper

const swiper2 = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }, 
    pagination:{
        el: '.swiper-pagination'
    }
})