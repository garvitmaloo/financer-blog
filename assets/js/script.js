const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown-link");
const navSearchIcon = document.querySelector(".nav-search-icon");
const navSearchFormCloseIcon = document.querySelector(
  ".search-form-close-icon"
);
const searchForm = document.querySelector(".search-form");
const mobileNavCloseIcon = document.querySelector(".mobile-nav-close-icon");
const body = document.querySelector("body");
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle-btn");

dropdownLink.addEventListener("click", function (e) {
  e.preventDefault();

  dropdown.classList.toggle("dropdown-open");
});

navSearchIcon.addEventListener("click", function () {
  searchForm.classList.add("show-form");
});

navSearchFormCloseIcon.addEventListener("click", function () {
  searchForm.classList.remove("show-form");
});

mobileNavToggleBtn.addEventListener("click", function () {
  body.classList.add("mobile-nav-active");
});

mobileNavCloseIcon.addEventListener("click", function () {
  body.classList.remove("mobile-nav-active");
});
