import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
	const acc = new Accordion('.about-accordion-container', {
		firstOpen: true,
		duration: 500,
		showMultiple: false,
		collapse: true,
	});
	acc.open(0);

	var swiper = new Swiper('.swiper', {
		modules: [Navigation, Keyboard],
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: false,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 6,
				allowTouchMove: false,
			},
		},
	});
});
