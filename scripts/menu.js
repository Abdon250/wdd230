document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle the menu when the button is clicked
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close the menu if a menu item is clicked (optional)
    navMenu.querySelectorAll("a").forEach(function (item) {
        item.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
