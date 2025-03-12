const section = document.querySelector('#covers');

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

section.addEventListener('mouseenter', () => {
	section.classList.add('hovered');
});

section.addEventListener('mouseleave', () => {
	section.classList.remove('hovered');
});

section.addEventListener('touchstart', () => {
	section.classList.toggle('hovered');
});
