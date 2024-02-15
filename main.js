window.onscroll = function () {
    if (window.scrollY >= 1) {
        let headerElement = document.querySelector("header").classList.add("header-after-scroll");
    }
    else {
        let headerElement = document.querySelector("header").classList.remove("header-after-scroll");
    }
}

let reveals = document.querySelectorAll(".reveal");
function reveal() {
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 25;

        if (elementTop < windowHeight - elementVisible || elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();