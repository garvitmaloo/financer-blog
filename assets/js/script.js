const dropdown = document.querySelector(".dropdown");
const innerDropdown = document.querySelector(".inner-dropdown");
const dropdownLink = document.querySelector(".dropdown-link");
const innerDropdownLink = document.querySelector(".inner-dropdown-link");
const navSearchIcon = document.querySelector(".nav-search-icon");
const navSearchFormCloseIcon = document.querySelector(
  ".search-form-close-icon"
);
const searchForm = document.querySelector(".search-form");

dropdownLink.addEventListener("click", function (e) {
  e.preventDefault();

  dropdown.classList.toggle("dropdown-open");
  innerDropdown.classList.remove("dropdown-open");
});

innerDropdownLink.addEventListener("click", function (e) {
  e.preventDefault();

  innerDropdown.classList.toggle("dropdown-open");
});

navSearchIcon.addEventListener("click", function () {
  searchForm.classList.add("show-form");
});

navSearchFormCloseIcon.addEventListener("click", function () {
  searchForm.classList.remove("show-form");
});
