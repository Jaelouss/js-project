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
        duration: 400,
        showMultiple: false,
        collapse: true,
        });
     acc.open(0);
});
 
    const swiper = new Swiper('.swiper', {
        loop: true,
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        //spaceBetween: 0,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            // nextEl: '.custom-next',
            // prevEl: '.custom-prev',
        //  },
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },
        //     keyboard: {
        //         enabled: true,
        //         onlyInViewport: false,
             },
        });