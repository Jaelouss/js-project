import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import axios from 'axios';

const swiper = new Swiper('.swiper1', {
   modules: [ Navigation, Pagination ],
  navigation: {
    nextEl: '[data-btn="next1"]',
    prevEl: '[data-btn="prev1"]',
  },
});