// Menu mobile (bouton ☰)
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}

// Année automatique dans le footer
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
