document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("menu");
    const search = document.querySelector(".search");
    const joinButton = document.querySelector(".cn");
    const form = document.querySelector(".form");

    function toggleResponsive() {
        if (window.innerWidth <= 768) {
            navbar.classList.add("responsive");
            menu.style.display = "none";
            search.style.display = "none";
            joinButton.style.display = "none";
            form.style.left = "50%";
            form.style.transform = "translateX(-50%)";
        } else {
            navbar.classList.remove("responsive");
            menu.style.display = "block";
            search.style.display = "block";
            joinButton.style.display = "block";
            form.style.left = "870px";
            form.style.transform = "none";
        }
    }

    toggleResponsive();

    window.addEventListener("resize", toggleResponsive);
});