// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
    entry.target.classList.add("show");
} else {
    entry.target.classList.remove("show");
}

    });

});

const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach((element) => {
    observer.observe(element);
});
// Back to top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});