const section = document.querySelector('#covers');

const isTouchDevice = () =>
	'ontouchstart' in window || navigator.maxTouchPoints > 0;

const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			} else {
				entry.target.classList.remove('visible');
			}
		});
	},
	{
		root: null,
		rootMargin: '100px',
		threshold: 0,
	}
);

observer.observe(section);

const handleMouseOver = event => {
	if (!isTouchDevice()) {
		const link = event.target.closest('a');
		if (link) {
			const group = link.closest('.group-of-covers');
			if (group) {
				group.classList.add('pause');
			}
		}
	}
};

const handleMouseOut = event => {
	if (!isTouchDevice()) {
		const link = event.target.closest('a');
		if (link) {
			const group = link.closest('.group-of-covers');
			if (group) {
				group.classList.remove('pause');
			}
		}
	}
};

const handleTouchStart = event => {
	if (isTouchDevice()) {
		section.classList.toggle('hovered');

		const groups = section.querySelectorAll('.group-of-covers');
		groups.forEach(group => group.classList.remove('pause'));
	}
};

section.addEventListener('mouseover', handleMouseOver);
section.addEventListener('mouseout', handleMouseOut);
section.addEventListener('touchstart', handleTouchStart);

window.addEventListener('mousemove', event => {
	if (!isTouchDevice() && section.classList.contains('hovered')) {
		section.classList.remove('hovered');
		const groups = section.querySelectorAll('.group-of-covers');
		groups.forEach(group => group.classList.remove('pause'));
	}
});
