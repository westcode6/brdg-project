const navToggler = document.querySelector('#navToggler');
const navContent = document.querySelector('#navContent');
navToggler.addEventListener('click', showNavContent);

function showNavContent(e) {
    e.preventDefault();
    if (navContent.classList.contains('hidden')) {
        navContent.classList.remove('hidden')
    } else {
        navContent.classList.add('hidden')
    }
}