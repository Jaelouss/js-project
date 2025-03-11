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

	const swiper = new Swiper('#swipper-box', {
		modules: [Navigation, Keyboard],
		loop: true,
		loopedSlides: 12,
		slidesPerView: 2,
		grabCursor: true,
		simulateTouch: true,
		touchRatio: 1,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '#swiper-button',
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
			},
		},
	});
});
