let toTop = document.querySelector(".scrolling");
window.onscroll = function () {
    if (window.scrollY >= 700) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
};
toTop.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};