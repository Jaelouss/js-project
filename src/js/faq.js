import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';

import axios from 'axios';
import '../scss/blocks/_faq.scss'


new Accordion(".accordion-container", {
    duration: 500,
    showMultiple: false,
  });