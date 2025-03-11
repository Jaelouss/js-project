import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';

import axios from 'axios';

document.querySelectorAll('.group-of-covers').forEach(groupOfCovers => {
	groupOfCovers.querySelectorAll('.cover-image').forEach(cover => {
		cover.addEventListener('mouseenter', () => {
			groupOfCovers.classList.add('paused');
		});
		cover.addEventListener('mouseleave', () => {
			groupOfCovers.classList.remove('paused');
		});
	});
}); //does not work for some reason
