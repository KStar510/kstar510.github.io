'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// portfolio variables
const portfolioItem = document.querySelectorAll("[data-portfolio-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalTime = document.querySelector("[data-modal-time]");
const modalText = document.querySelector("[data-modal-text]");
const modalLink = document.querySelector("[data-modal-link]");

// modal toggle function
const portfolioModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < portfolioItem.length; i++) {

    portfolioItem[i].addEventListener("click", function () {

        //modalImg.src = this.querySelector("[data-portfolio-avatar]").src;
        //modalImg.alt = this.querySelector("[data-portfolio-avatar]").alt;
        modalImg.innerHTML = this.querySelector("[data-portfolio-avatar]").innerHTML;
        modalTitle.innerHTML = this.querySelector("[data-portfolio-title]").innerHTML;
        modalTime.innerHTML = this.querySelector("[data-portfolio-time]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-portfolio-text]").innerHTML;
        modalLink.href = this.querySelector("[data-portfolio-link]").href;

        portfolioModalFunc();

    });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", portfolioModalFunc);
overlay.addEventListener("click", portfolioModalFunc);




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}