const compactBtn = document.querySelector(".choose__compact")
const sportBtn = document.querySelector(".choose__sport")
const vansBtn = document.querySelector(".choose__vans")


const compact = document.querySelector(".compact")
const sport = document.querySelector(".sport")
const vans = document.querySelector(".vans")


compactBtn.addEventListener("click", () => {
    compact.style.display = "block";
    compactBtn.style.background = "var(--btn-hover)";
    compactBtn.style.border = "2px solid var(--btn-hover)";
    sport.style.display = "none"
    sportBtn.style.background = "white"
    sportBtn.style.border = "2px solid gray"
    vans.style.display = "none"
    vansBtn.style.background = "white"
    vansBtn.style.border = "2px solid gray"
})

sportBtn.addEventListener("click", () => {
    sport.style.display = "block";
    sportBtn.style.background = "var(--btn-hover)";
    sportBtn.style.border = "2px solid var(--btn-hover)";
    compact.style.display = "none"
    compactBtn.style.border = "2px solid gray"
    compactBtn.style.background = "white"
    vans.style.display = "none"
    vansBtn.style.background = "white"
    vansBtn.style.border = "2px solid gray"
})
vansBtn.addEventListener("click", () => {
    vans.style.display = "block";
    vansBtn.style.background = "var(--btn-hover)";
    vansBtn.style.border = "2px solid var(--btn-hover)";
    compact.style.display = "none"
    compactBtn.style.border = "2px solid gray"
    compactBtn.style.background = "white"
    sportBtn.style.background = "white"
    sport.style.display = "none"
    sportBtn.style.border = "2px solid gray"
})


const hamburgerEl = document.querySelector(".hamburger-menu");
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu__close");
const body = document.querySelector("body")
const loginBtn = document.querySelector(".navbar__login-btn")
const modalLogin = document.querySelector(".modal__login")
const modalLoginClose = document.querySelector(".modal__login-close")
const mobileMenuBtnLogin = document.querySelector(".mobile-menu__footer-login-btn")
const mode = document.querySelector(".navbar__dark-mode")

mode.onclick = function () {
    body.classList.toggle("dark")
}


hamburgerEl.onclick = function (event) {
    mobileMenuEl.style.display = "block";
    body.style.overflow = "hidden"
};
mobileMenuClose.onclick = function () {
    mobileMenuEl.style.display = "none"
    body.style.overflo = "auto"
}
loginBtn.onclick = function () {
    modalLogin.style.top = "50%"
}
modalLoginClose.onclick = function () {
    modalLogin.style.top = "-50%"
}
mobileMenuBtnLogin.onclick = function () {
    modalLogin.style.top = "50%"
    mobileMenuEl.style.display = "none"
}