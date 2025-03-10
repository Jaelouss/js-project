import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import axios from 'axios';

document.addEventListener("DOMContentLoaded", function () {
    const acc=new Accordion('.accordion-container', {
        firstOpen: true,
        duration: 500,
        showMultiple: false,
        collapse: true,
        });
    acc.open(0);
});



const swiper = new Swiper('#about-swiper', {
    loop: true,
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 1,    
    freeMode: true,
    centeredSlides: false,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }, 
});

