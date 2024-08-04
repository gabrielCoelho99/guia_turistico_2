'use strict';

/**
 * navbar toggle
 */

document.addEventListener("DOMContentLoaded", function() {
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");

  // Abre a navbar ao clicar no botão de abrir
  navOpenBtn.addEventListener("click", function() {
    navbar.classList.add("active");
    overlay.classList.add("active");
  });

  // Fecha a navbar ao clicar no botão de fechar
  navCloseBtn.addEventListener("click", function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Fecha a navbar ao clicar no overlay
  overlay.addEventListener("click", function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});




/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/*buscar */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const popularList = document.getElementById('popular-list');

  searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const destinations = popularList.querySelectorAll('li');

      destinations.forEach(destination => {
          const destinationText = destination.textContent.toLowerCase();
          if (destinationText.includes(query)) {
              destination.style.display = '';
          } else {
              destination.style.display = 'none';
          }
      });
  });
});
