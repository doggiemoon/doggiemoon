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
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 25;

        if (elementTop < windowHeight - elementVisible || elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

let current_gallery_item = 1;
let changeLandingPageContentInterval = null;
let changeLandingPageContentTimeout = null;

function setAutoChangeLandingPage() {
    changeLandingPageContentInterval = setInterval(autoChangeLandingPageContent, 5000);
}

setAutoChangeLandingPage();

function autoChangeLandingPageContent() {
    document.querySelector("#gallery-items-nav div:nth-child(" + current_gallery_item + ")").classList.remove("gallery-items-nav-active");
    document.querySelector("#gallery-items div:nth-child(" + current_gallery_item + ")").style.display = "none";

    current_gallery_item++;
    if (current_gallery_item === 6) {
        current_gallery_item = 1;
    }

    document.querySelector("#gallery-items-nav div:nth-child(" + current_gallery_item + ")").classList.add("gallery-items-nav-active");
    document.querySelector("#gallery-items div:nth-child(" + current_gallery_item + ")").style.display = "flex";

}
function changeLandingPageContent(gallery_item) {
    clearInterval(changeLandingPageContentInterval);
    clearTimeout(changeLandingPageContentTimeout);

    document.querySelector("#gallery-items-nav div:nth-child(" + current_gallery_item + ")").classList.remove("gallery-items-nav-active");
    document.querySelector("#gallery-items div:nth-child(" + current_gallery_item + ")").style.display = "none";

    current_gallery_item = gallery_item;

    document.querySelector("#gallery-items-nav div:nth-child(" + current_gallery_item + ")").classList.add("gallery-items-nav-active");
    document.querySelector("#gallery-items div:nth-child(" + current_gallery_item + ")").style.display = "flex";

    changeLandingPageContentTimeout = setTimeout(setAutoChangeLandingPage, 6000);
}

