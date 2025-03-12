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

section.addEventListener('mouseover', event => {
	const link = event.target.closest('a');
	if (link) {
		const group = link.closest('.group-of-covers');
		if (group) {
			group.classList.add('pause');
		}
	}
});

section.addEventListener('mouseout', event => {
	const link = event.target.closest('a');
	if (link) {
		const group = link.closest('.group-of-covers');
		if (group) {
			group.classList.remove('pause');
		}
	}
});

section.addEventListener('touchstart', () => {
	section.classList.toggle('hovered');
});
