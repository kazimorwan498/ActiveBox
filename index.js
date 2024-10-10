const navMobile = document.getElementById("nav-mobile"),
    navButton = document.getElementById("nav-open-button"),
    navClose = document.getElementById("nav-close-button"),
    body = document.querySelector("body"),
    navLinks = document.querySelectorAll("#nav-mobile a");

navButton.addEventListener("click", () => {
    navMobile.style.display = "flex";
    navButton.style.pointerEvents = "none";
    body.style.overflow = "hidden";

    navMobile.classList.add("bounce-in");
    setTimeout(() => {
        navMobile.classList.remove("bounce-in");
    }, 200);
});

navClose.addEventListener("click", () => {
    navMobile.classList.add("bounce-out");
    navButton.style.pointerEvents = "auto";

    setTimeout(() => {
        navMobile.style.display = "none";
        navButton.style.display = "flex";
        body.style.overflow = "auto";

        navMobile.classList.remove("bounce-out");
    }, 200);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMobile.classList.add("bounce-out");
        navButton.style.pointerEvents = "auto";

        setTimeout(() => {
            navMobile.style.display = "none";
            navButton.style.display = "flex";
            body.style.overflow = "auto";

            navMobile.classList.remove("bounce-out");
        }, 200);
    });
});

function checkScreenWidth() {
    if (window.innerWidth > 800) {
        navButton.style.display = "none";
        navMobile.style.display = "none";
    } else {
        navButton.style.display = "flex";
    }
}

// Event listener for window resize
window.addEventListener("resize", checkScreenWidth);

// Call the function once on load to check the initial screen size
window.addEventListener("load", checkScreenWidth);
