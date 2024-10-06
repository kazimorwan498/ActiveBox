const navMobile = document.getElementById("nav-mobile"),
    navButton = document.getElementById("nav-button"),
    navClose = document.getElementById("nav-close"),
    body = document.querySelector("body"),
    navLinks = document.querySelectorAll("#nav-mobile a");

navButton.addEventListener("click", () => {
    navMobile.style.display = "flex";
    // navButton.style.display = "none";
    body.style.overflow = "hidden";

    // Add bounce-in animation
    navMobile.classList.add("bounce-in");
    setTimeout(() => {
        navMobile.classList.remove("bounce-in");
    }, 200); // Remove bounce-in class after animation completes
});

navClose.addEventListener("click", () => {
    // Add bounce-out animation before hiding navMobile
    navMobile.classList.add("bounce-out");

    setTimeout(() => {
        navMobile.style.display = "none";
        navButton.style.display = "flex";
        body.style.overflow = "auto";

        // Remove bounce-out class after animation completes
        navMobile.classList.remove("bounce-out");
    }, 200); // Wait for the bounce-out animation to complete
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Add bounce-out animation before hiding nav
        navMobile.classList.add("bounce-out");

        setTimeout(() => {
            navMobile.style.display = "none";
            navButton.style.display = "flex";
            body.style.overflow = "auto";

            // Remove bounce-out class after animation completes
            navMobile.classList.remove("bounce-out");
        }, 200); // Wait for the bounce-out animation to complete
    });
});

function checkScreenWidth() {
    if (window.innerWidth > 800) {
        // If width is greater than 650px, hide #nav and #menu-btn
        navButton.style.display = "none";
        navMobile.style.display = "none";
    } else {
        // If width is less than or equal to 650px, show #nav and #menu-btn
        navButton.style.display = "flex"; // Or whatever display type you prefer
    }
}

// Event listener for window resize
window.addEventListener("resize", checkScreenWidth);

// Call the function once on load to check the initial screen size
window.addEventListener("load", checkScreenWidth);
