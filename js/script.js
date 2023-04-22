particlesJS.load('particles-js', 'js/particles.json', function() {
	console.log('callback - particles.js config loaded');
});
const hamburger = document.querySelector('.bar');
const navbar = document.querySelector('.is-active__navbar')
hamburger.addEventListener('click', () => {
	navbar.classList.toggle('is-invalid');
	hamburger.classList.toggle('is-active-bar');
})